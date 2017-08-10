<?php

function createMessages($result, $detail){
    $message = array('result' => '', 'detail' => '');
    $message['result'] = $result;
    $message['detail'] = $detail;
    return $message;
}
