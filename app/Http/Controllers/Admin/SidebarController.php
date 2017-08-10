<?php

namespace App\Http\Controllers\Admin;

use App\Models\Sidebar;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SidebarController extends Controller
{
    public function index()
    {
        return view('admin.sidebar.index');
    }

    public function all()
    {
        $items = Sidebar::all();
        $parents = array();
        $sons = array();
        foreach ($items as $item)
        {
            if ($item->parent_id === 0)
            {
                $parents[] = $item;
            }
            else
            {
                $sons[] = $item;
            }
        }
        $sidebars = array();
        foreach ($parents as $parent)
        {
            $children = array();
            foreach ($sons as $son)
            {
                if ($son->parent_id === $parent->id)
                {
                    array_push($children, $son);
                }
            }
            $parent->children = $children;
            $sidebars[] = $parent;
        }
        return array(
            'items' => $sidebars
        );
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
