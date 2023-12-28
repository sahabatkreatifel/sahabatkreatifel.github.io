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
async function getYtChannelProp(channelname,passback='all'){
    let id=getYtChannelId(channelname),key=getApiKey('yt');
    let p;
    if(/(snippet|name|desc|thumb|handle)/i.test(passback)){
        let ytChannelPropRaw = await getjsonfile(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${key}`)
        let snippet=ytChannelPropRaw['items'][0]['snippet'];let p;
        if(/snippet/gi.test(passback)){p=ytChannelProp}
        else if(/name/gi.test(passback)){p=snippet['title']}
        else if(/desc/gi.test(passback)){p=snippet['description']}
        else if(/thumb/gi.test(passback)){
          if(/thumb-small/i.test(passback)){p=snippet['thumbnails']['default']['url']}
          else if(/thumb-med(ium)?/i.test(passback)){p=snippet['thumbnails']['medium']['url']}
          else if(/thumb(-high)?/i.test(passback)){p=snippet['thumbnails']['high']['url']}
          else if(/handle/i.test(passback)){p=snippet['customUrl']}
        }
      console.log(p)
    }
    /*else if(preg_match("/(allstats|stats|videocount|subs|viewcount)/i", $passback)){
        $ytChannelPropRaw=file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=$id&key=$key");
        $ytChannelProp=json_decode($ytChannelPropRaw,true);
        $stats=$ytChannelProp['items'][0]['statistics'];
        if(preg_match("/(allstats|stats)/i", $passback)){$p=$ytChannelProp;}
        else if(preg_match("/videocount/i", $passback)){$p=$stats['videoCount'];}
        else if(preg_match("/subs/i", $passback)){$p=$stats['subscriberCount'];}
        else if(preg_match("/viewcount/i", $passback)){$p=$stats['viewCount'];}
    }*/
    else if(/(all)/i.test(passback) && passback!=='allstats'){
      let ytChannelPropRaw = await getjsonfile(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${id}&key=${key}`)
      //ytChannelPropRaw=file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=$id&key=$key");
      console.log(p);
    }
    /*else{$p=false;}
    return $p;*/
}
