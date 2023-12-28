function getApiKey(x='yt'){
  let apikey;
  if(x==='yt'){apikey='AIzaSyAVBeWy2G-mgK1mkALttDPV1hYSbfHI7iw'}
  return apikey;
}
function getYtChannelId(x){
  let ytid;
  if(/skel/gi.test(x)){ytid='UCV5ibzkKa5UBsTAEB5B0pnA'}
  return ytid;
}
async function getjsonfile(url){
  let res=await fetch(url);let text=await res.text();return JSON.parse(text);
}
function getYtChannelProp(channelname,passback='all'){
    let id=getYtChannelId($channelname),key=getApiKey('yt');
    let p;
    if(/(snippet|name|desc|thumb|handle)/i.test(passback)){
        let ytChannelPropRaw = getjsonfile(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${key}`)
        /*$ytChannelProp=json_decode($ytChannelPropRaw,true);
        $snippet=$ytChannelProp['items'][0]['snippet'];
        if(preg_match("/snippet/i", $passback)){$p=$ytChannelProp;}
        else if(preg_match("/name/i", $passback)){$p=$snippet['title'];}
        else if(preg_match("/desc/i", $passback)){$p=$snippet['description'];}
        else if(preg_match("/thumb/i", $passback)){
            if(preg_match("/thumb-small/i", $passback)){$p=$snippet['thumbnails']['default']['url'];}
            else if(preg_match("/thumb-med(ium)?/i", $passback)){$p=$snippet['thumbnails']['medium']['url'];}
            else if(preg_match("/thumb(-high)?/i", $passback)){$p=$snippet['thumbnails']['high']['url'];}
            else if(preg_match("/handle/i", $passback)){$p=$snippet['customUrl'];}
        }*/
      console.log(ytChannelPropRaw)
    }
    /*else if(preg_match("/(allstats|stats|videocount|subs|viewcount)/i", $passback)){
        $ytChannelPropRaw=file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=$id&key=$key");
        $ytChannelProp=json_decode($ytChannelPropRaw,true);
        $stats=$ytChannelProp['items'][0]['statistics'];
        if(preg_match("/(allstats|stats)/i", $passback)){$p=$ytChannelProp;}
        else if(preg_match("/videocount/i", $passback)){$p=$stats['videoCount'];}
        else if(preg_match("/subs/i", $passback)){$p=$stats['subscriberCount'];}
        else if(preg_match("/viewcount/i", $passback)){$p=$stats['viewCount'];}
    }
    else if(preg_match("/all/i", $passback) and $passback!=='allstats'){
        $ytChannelPropRaw=file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=$id&key=$key");
        $p=json_decode($ytChannelPropRaw,true);
        //printr_er($p);
    }
    else{$p=false;}
    return $p;*/
}
