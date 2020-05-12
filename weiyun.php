<?php
if(!isset($_GET['id']))
    exit('缺少参数！');
$userId="xiaolatv";//修改为你用户名
$userKey="56a327a38e3bd392dbb2b2101d6c65fb";//修改为你的用户密钥
$sigParam["time"]=time();
$sigParam["user"]=$userId;
ksort($sigParam);
$preEncodeStr='';
$urlParams='';
foreach ($sigParam as $k=>$v){
    $preEncodeStr=$preEncodeStr.$v;
    $urlParams=$urlParams.'-'.$k.'='.$v;
}
$sign=md5($preEncodeStr.$userKey);
// $u=$player_info['url'].sprintf("?sign=%s%s",$sign,$urlParams);
$u='http://dbk.azcc.com.cn/api/videoplay/'.$_GET['id'].'?sign='.$sign.$urlParams."-";
header('HTTP/1.1 302 Moved Temporarily');
header('location:'.$u);