<?php

namespace App\Http\Controllers\Admin;

use App\Models\Option;
use App\Models\Paper;
use App\Models\Paper_question;
use App\Models\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ExamController extends Controller
{
    public function index()
    {
        return view('admin.exam.index');
    }

    public function getQuestions()
    {
        // 根据用户id返回题目
        $questions = Question::where('user_id', Auth::user()->id)->get();
        foreach ($questions as $question)
        {
            $options = Option::where('question_id', $question->id)->get();
            $question->options = $options;
        }
        return array(
            'items' => $questions
        );
    }

    public function createQuestion(Request $request)
    {
        $content = $request->get('content');
        $options = $request->get('options');
        $type = $request->get('type');

        $question = new Question;
        $question['content'] = $content;
        $question['type'] = $type;
        $question['user_id'] = Auth::user()->id;
        $question['is_public'] = 1;
        $question->save();

        foreach ($options as $option)
        {
            $param = new Option();
            $param['question_id'] = $question->id;
            $param['content'] = $option;
            $param->save();
        }
        $question['options'] = $options;
        return $question;
    }

    //获取用户的所有试卷
    public function getPapers()
    {
        // 根据用户id返回题目
        $papers = Paper::where('user_id', Auth::user()->id)->get();
        foreach ($papers as $paper)
        {
            $ids = explode(',', $paper->question_ids);
            $paper->question_ids = $ids;
        }
        return array(
            'items' => $papers
        );
    }

    //获取用户的某份试卷
    public function showPaper($id)
    {
        return view('admin.exam.paper', compact('id'));
    }

    public function getPaper($id)
    {
        $paper = Paper::where('user_id', Auth::user()->id)->where('uid', $id)->get();
        $arr = Paper_question::where('paper_id', $paper[0]->id)->get();
        $questions = array();
        foreach ($arr as $item)
        {
            $question = Question::find($item->question_id);
            $options = Option::where('question_id', $question->id)->get();
            $question->options = $options;
            $questions[] = $question;
        }
        return $questions;
    }

    // 创建试卷
    public function createPaper(Request $request)
    {
        $ids = $request->get('ids');
        $paper = new Paper();
        $paper['question_ids'] = implode(",", $ids);;
        $paper['user_id'] = Auth::user()->id;
        $paper['uid'] = md5(time());
        $paper->save();
        return $paper;
    }

}
