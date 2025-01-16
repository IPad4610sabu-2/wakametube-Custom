"use strict";
const m3u8stream = require('m3u8stream');
const ytsr = require("ytsr");
const ytpl = require("ytpl");
const miniget = require("miniget");
const express = require("express");
const ejs = require("ejs");
const app = express();
const axios = require('axios');
const fs = require('fs');
const { https } = require('follow-redirects');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jp = require('jsonpath');
const path = require('path');
const bodyParser = require('body-parser');
const { URL } = require('url');
const bcrypt = require('bcrypt');
const http = require('http');
const session = require('express-session');

const limit = process.env.LIMIT || 50;

const user_agent = process.env.USER_AGENT || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36";

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: "wakameumaiyooooooooo",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5 * 24 * 60 * 60 * 1000 }
}));

//ログイン
// 読み込み時ちぇっく
app.use((req, res, next) => {
    if (req.cookies.massiropass !== 'ok' && !req.path.includes('login')) {
        return res.redirect('/login');
    } else {
        next();
    }
});
//ログイン済み？
app.get('/login/if', async (req, res) => {
    if (req.cookies.massiropass !== 'ok') {
        res.render('login', { error: 'ログインしていません。もう一度ログインして下さい' })
    } else {
        return res.redirect('/home.pdf');
    }
});
// ログインページ
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});
// パスワード確認
app.post('/login', (req, res) => {
    const password = req.body.password;
    if (password === '942222' || password === '114545' || password === 'tsukasanoomegane' || password === '56437815'|| password === '2h9 a43 697? D8d 697 7s3 67k8bbs?'|| password === '123'|| password === 'omoro'|| password === 'あいうえお'|| password === 'akuaku'|| password === 'wakame123'|| password === 'kuro273'|| password === 'mariannu'|| password === 'takenoko'|| password === 'izumi'|| password === '111127'|| password === '85175'|| password === 'チーズ'|| password === 'huton'|| password === 'ポッキー'|| password === 'daigo'|| password === 'Yu161757'|| password === 'sky'|| password === 'カミ'|| password === 'tama'|| password === 'sukonbu'|| password === 'kazuno'|| password === 'haya'|| password === 'kame'|| password === 'wakamee'|| password === 'ABCD'|| password === 'mkleo'|| password === '野獣'|| password === 'Adam'|| password === '3182'|| password === 'yukiyoutube'|| password === 'iruka'|| password === 'mitunaga'|| password === 'mituharu'|| password === '1227'|| password === 'shi6ma'|| password === 'Yuki'|| password === '999'|| password === 'akira0425'|| password === '1587515875'|| password === 'Tachibana'|| password === 'じゃがりこサラダ味'|| password === 'jojo12345678910'|| password === 'kouhei'|| password === 'Zdst!2810'|| password === 'BADHOP'|| password === 'E233kei1000banndai'|| password === 'hisahiro07140702'|| password === 'Yukimathgod'|| password === '12wakamw'|| password === '159357'|| password === '12wakame'|| password === 'InfuruenzaBtaipeyuki'|| password === 'pyonta6016'|| password === 'kikaigakowareta'|| password === 'himhim'|| password === 'youtube0318'|| password === 'tc1700'|| password === 'kurotyan'|| password === '851752525'|| password === 'サッカー大好き'|| password === '1111111112'|| password === '10181018'|| password === 'Qazwsxedc123@'|| password === 'naotaka53kurabu'|| password === 'Tanakahabaka'|| password === 'massirosyodaioisiisaba'|| password === 'あいしてるわ'|| password === 'take'|| password === 'wakamegohann'|| password === 'CXgcu902'|| password === 'zarbon'|| password === 'kurakurarinn'|| password === 'cha.Amiya0059'|| password === 'Shioringo'|| password === 's12212212S'|| password === '4519'|| password === '1133000'|| password === '773540'|| password === 'shuuma1205'|| password === 'pppppppp'|| password === 'jadgm＠ta'|| password === 'はちみつなめなめ'|| password === '1133000'|| password === 'jojo dio'|| password === 'jojo dio jostar'|| password === 'Yamato'|| password === 'Nxlpz'|| password === 'sprunki'|| password === 'Natume'|| password === '88888888'|| password === 'imaginary'|| password === 'baka'|| password === 'hidagyu123飛騨牛123'|| password === 'tottemonemuinoyo'|| password === 'Rokomoko'|| password === 'takagi'|| password === 'hidagyu232423'|| password === 'Aaaaaaaaaaaa'|| password === 'soruto'|| password === 'Higashiosaka41'|| password === 'mugenkonpasu'|| password === '01279494'|| password === 'ソプラノ漫画カレコレ屋エトラちゃんは見た'|| password === 'ソプラノエトラカレコレ１４２'|| password === 'adgjmptwadgjmptw'|| password === 'kurikuri8810'|| password === 'wakamed'|| password === 'うhぅふdxhwしゅwしゅwhすwhs'|| password === 'Higashiosaka41'|| password === '安本丹バナーナ！'|| password === 'Toa1215'|| password === 'anpontan'|| password === 'Kingcrimson'|| password === '3284'|| password === 'ijtpjt'|| password === 'um(km’jt'|| password === 'mamatarou'|| password === 'aiueooo'|| password === 'azalea'|| password === 'makasetakuann0439'|| password === 'Zmxncbv111433'|| password === 'PC1700'|| password === 'Sousuke0208'|| password === 'jindaisuki123'|| password === 'yamadakuniko'|| password === 'angelofdarkness'|| password === 'jbふぉあいうぃおふぁwbふぉいばwふぉいbわふぃおb'|| password === 'くり'|| password === 'wanko'|| password === 'moana'|| password === 'friend'|| password === 'jlad7e4w'|| password === 'あああああああああいい'|| password === 'kamokai'|| password === 'あきすての'|| password === 'ugguguguguuguguuggugugugugu'|| password === 'tyokoreーto'|| password === 'abcdefg'|| password === '1357910'|| password === 'Higashiosaka41'|| password === 'なんだこいつ'|| password === 'あしざわまさよし'|| password === 'asizawamasayosi'|| password === 'サッカー'|| password === 'Efootball love'|| password === 'eita0123'|| password === 'sssssssssss'|| password === 'Takeru'|| password === 'Furina-daisuki-1013'|| password === 'kombu'|| password === 'H1867382takeru'|| password === 'nenuなのだ‼︎252539nice'|| password === 'wwwwwwwwww'|| password === 'mikelisthebest'|| password === 'melom200429'|| password === 'no-deta'|| password === 'Takumi'|| password === 'majiwakaranai'|| password === 'Wait what is this song '|| password === 'yuki305'|| password === '778614544'|| password === 'yoko19982024yokohama'|| password === 'Asdfg'|| password === 'touhunomisosiru'|| password === 'mikelishimFORREAL'|| password === 'Mamamaa@'|| password === 'Tokyo2020'|| password === 'wakametabetai'|| password === '45451919'|| password === '01060202'|| password === 'nbjhbgghkhhfcjlr'|| password === '0829sushi'|| password === 'wakama'|| password === 'remoteview'|| password === 'うにうにうにうにうにうにうにうに'|| password === 'hoisukekunn'|| password === 'ITATILYAKO'|| password === 'no-deta'|| password === '10700'|| password === 'asahoaho'|| password === 'vmpe_zomb2'|| password === 'yasutakebaka'|| password === '102409'|| password === 'super3939orange'|| password === 'wakame wakame'|| password === 'Kazuyoshi0330'|| password === 'Re069279'|| password === 'takenokonosato 日本語でたけのこの里です'|| password === 'dodhfbsiaeushdidxnziao'|| password === 'issei1216'|| password === 'はぴぱのぴぱ'|| password === 'wawakasann'|| password === 'HAPIPANOPIPA'|| password === '31415926535'|| password === '亀の棒'|| password === '01060202ra'|| password === '32329563sasemi'|| password === 'matumoto'|| password === 'Kinuko'|| password === '01060202'|| password === 'akaineko'|| password === 'sn121248@CXgcu902'|| password === 'ゆーとんのゲーム部屋'|| password === 'Aey>6e4b'|| password === 'yuharu3056'|| password === 'japanzaru47'|| password === 'Yukituber'|| password === '010700'|| password === '200813qazwsxedc'|| password === 'SIMESIMEHAHAHAKONABANANA'|| password === '102535719713'|| password === 'yuuto2278'|| password === 'Marimo76'|| password === 'ながいでもも'|| password === '942222'|| password === 'Omotibanana'|| password === 'あいうえおかきくけこさしすせそたちつてとなにぬねの'|| password === '11451411451419198100721'|| password === '0909090909096'|| password === 'ohayoliom20090809'|| password === 'Mametatomousu123'|| password === 'daikonnorosi'|| password === '0909090909096'|| password === 'Haru0104'|| password === 'wakawaka'|| password === 'Dainagonazuki'|| password === 'Mizu0718'|| password === 'masa0301'|| password === 'nikotyan'|| password === 'wakameee'|| password === 'kakeru95'|| password === 'nono'|| password === 'Takehiro1011'|| password === 'HAYATO0103'|| password === 'Sirasu0614'|| password === 'asira2362'|| password === 'wakamekamekame'|| password === 'Wawawawakamenn'|| password === 'ho0se911'|| password === 'anaruhikuhiku'|| password === 'hakatanosio'|| password === 'pokemongo'|| password === 'passwordtoha'|| password === '438617'|| password === '3910Saki'|| password === 'bkuwmjtwmjtwm'|| password === 'みなさんこんにちは'|| password === 'naobonbon'|| password === 'yurisrzw1020'|| password === 'nakamot'|| password === 'wakamewakame'|| password === 'muryoukuusyou'|| password === 'トリカラウス'|| password === 'スプラトゥーン999'|| password === 'Pokémon ZA'|| password === '桃太郎パーティー'|| password === 'huarupypy'|| password === '郵便局'|| password === '@pawa@@@@@@@@@@'|| password === 'akiakiakiaki'|| password === 'Imanaka'|| password === 'anboinagai0326'|| password === 'jhonson'|| password === 'ytimk2100'|| password === 'sa-mon7892'|| password === 'mikann'|| password === 'wakametubewonderful212152'|| password === 'konbu'|| password === 'mekawa'|| password === 'Arumeta6u'|| password === 'Tsxstsfaxafafaccesf'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'|| password === 'no-deta'){
        res.cookie('massiropass', 'ok', { maxAge: 5 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.redirect('/home.pdf2');
    } else {
        if (password === 'ohana') {
            return res.redirect('https://ohuaxiehui.webnode.jp');
        } else {
            res.render('login', { error: 'あなたの入力したパスワードは登録されていません 登録ボタンから登録してください' });
        }
    }
});
//パスワード
app.get('/login/forgot', (req, res) => {
  res.render(`login/forgot.ejs`);
});
//ログアウト
app.post('/logout', (req, res) => {
    res.cookie('massiropass', 'false', { maxAge: 0, httpOnly: true });
    return res.redirect('/login');
});

//レギュラー
app.get('/w/:id/5.pdf', async (req, res) => {
    const videoId = req.params.id;
    const server = req.query.server || '0';
    const serverUrls = {
        '0': [
        'https://natural-voltaic-titanium.glitch.me',
        'https://wtserver3.glitch.me',
        'https://wtserver1.glitch.me',
        'https://wtserver2.glitch.me',
	'https://ipad4610-mywakame.glitch.me',
        ],
        '1': 'https://wataamee.glitch.me',
        '2': 'https://watawatawata.glitch.me',
        '3': 'https://amenable-charm-lute.glitch.me',
        '4': 'https://wtserver2.glitch.me',
        '5': 'https://wtserver1.glitch.me',
        "6": "https://battle-deciduous-bear.glitch.me",
        "7": 'https://productive-noon-van.glitch.me',
	"8": 'https://balsam-secret-fine.glitch.me',
    };

    let baseUrl;
    if (server === '0') {
        const randomIndex = Math.floor(Math.random() * serverUrls['0'].length);
        baseUrl = serverUrls['0'][randomIndex];
    } else {
        baseUrl = serverUrls[server] || 'https://wtserver1.glitch.me';
    }
  
    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
        return res.status(400).send('videoIDが正しくありません');
    }

    const cookies = parseCookies(req);
    const wakames = cookies.wakametubeumekomi === 'true';
    if (wakames) {
        return res.redirect(`/umekomi/${videoId}`);
    }
    try {
        console.log(baseUrl);
        const response = await axios.get(`${baseUrl}/api/${videoId}`);
        const videoData = response.data;
        console.log(videoData);

        res.render('Yukiyoutube-mod', { videoData, videoId, baseUrl });
  } catch (error) {
        res.status(500).render('matte', { 
      videoId, baseUrl,
      error: '動画を取得できません', 
      details: error.message 
    });
  }
});


//高画質再生！！
app.get('/www/:id', async (req, res) => {
  const videoId = req.params.id;
    try {
        const response = await axios.get(`https://wataamee.glitch.me/api/${videoId}?token=wakameoishi`);
        const videoData = response.data;

        res.render('highquo', { videoData, videoId });
  } catch (error) {
        res.status(500).render('matte', { 
      videoId, 
      error: '動画を取得できません', 
      details: error.message 
    });
  }
});

//音だけ再生
app.get('/ll/:id', async (req, res) => {
  const videoId = req.params.id;

    try {
        const response = await axios.get(`https://wataamee.glitch.me/api/${videoId}?token=wakameoishi`);
        const videoData = response.data;

        res.render('listen', { videoData, videoId });
   } catch (error) {
        res.status(500).render('matte', { 
      videoId, 
      error: '動画を取得できません', 
      details: error.message 
    });
  }
});

//埋め込み再生
app.get('/umekomi/:id', async (req, res) => {
  let videoId = req.params.id;
  let url = `https://www.youtube.com/watch?v=${videoId}`;
  
  try {
    const inforesponse = await axios.get(url);
    const html = inforesponse.data;

    const titleMatch = html.match(/"title":\{.*?"text":"(.*?)"/);
    const descriptionMatch = html.match(/"attributedDescriptionBodyText":\{.*?"content":"(.*?)","commandRuns/);
    const viewsMatch = html.match(/"views":\{.*?"simpleText":"(.*?)"/);
    const channelImageMatch = html.match(/"channelThumbnail":\{.*?"url":"(.*?)"/);
    const channelNameMatch = html.match(/"channel":\{.*?"simpleText":"(.*?)"/);
    const channnelIdMatch = html.match(/"browseEndpoint":\{.*?"browseId":"(.*?)"/);

    const videoTitle = titleMatch ? titleMatch[1] : 'タイトルを取得できませんでした';
    const videoDes = descriptionMatch ? descriptionMatch[1].replace(/\\n/g, '\n') : '概要を取得できませんでした';
    const videoViews = viewsMatch ? viewsMatch[1] : '再生回数を取得できませんでした';
    const channelImage = channelImageMatch ? channelImageMatch[1] : '取得できませんでした';
    const channelName = channelNameMatch ? channelNameMatch[1] : '取得できませんでした';
    const channelId = channnelIdMatch ? channnelIdMatch[1] : '取得できませんでした';
    
    res.render('umekomi.ejs', { videoId, videoTitle, videoDes, videoViews, channelImage, channelName, channelId});
  } catch (error) {
    console.error(error);
    res.status(500).render('matte', { videoId, error: '動画情報を取得できません', details: error.message });
  }
});

app.get('/comment/:id', async (req, res) => {
  const videoId = req.params.id;
    try {
        const response = await axios.get(`https://wakamecomment.glitch.me/api/wakame/${videoId}`);
        const cm = response.data;

        res.render('comment', { cm });
   } catch (error) {
        res.status(500).render('error', { 
      videoId, 
      error: 'コメントを取得できません', 
      details: error.message 
    });
  }
});

// URLリスト
app.get("/urlfire", (req, res) => {
   res.sendFile(__dirname + "/views/fileurl.html");
});

// ダウンローダー
app.get("/videodl", (req, res) => {
   res.sendFile(__dirname + "/views/umekomi2.html");
});

// ダウンローダー
app.get("/home.pdf2", (req, res) => {
   res.sendFile(__dirname + "/views/Ridairekuto.html");
});

app.get("/difserver/:id", async (req, res) => {
  let videoId = req.params.id || req.query.v;
  try {
    res.render("difserver.ejs", {
      videoId: videoId
    });
  } catch (error) {
    res.status(500).render('error');
  }
});

// ホーム
app.get("/home.pdf", async (req, res) => {
  try {
    const response = await axios.get(`https://wataamee.glitch.me/topvideos/apiv2`);
    const topVideos = response.data;
    res.render("index.ejs", { topVideos });
  } catch (error) {
    console.error('エラーが発生しました:', error);
    res.status(500).send('データを取得できませんでした');
  }
});

app.get('/st', (req, res) => {
    res.sendStatus(200);
});

// サーチ
app.get("/s.pdf", async (req, res) => {
	let query = req.query.q;
	let page = Number(req.query.p || 2);
    let cookies = parseCookies(req);
    let wakames = cookies.wakames === 'true';
    if (wakames) {
        try {
		res.render("search2.ejs", {
			res: await ytsr(query, { limit, pages: page }),
			query: query,
			page
		});
	} catch (error) {
		console.error(error);
		try {
			res.status(500).render("error.ejs", {
				title: "ytsr Error",
				content: error
			});
		} catch (error) {
			console.error(error);
		}
	}
    } else {
       try {
		res.render("search.ejs", {
			res: await ytsr(query, { limit, pages: page }),
			query: query,
			page
		});
	} catch (error) {
		console.error(error);
		try {
			res.status(500).render("error.ejs", {
				title: "ytsr Error",
				content: error
			});
		} catch (error) {
			console.error(error);
		}
	}
    }
});

//プレイリスト
app.get("/p/:id", async (req, res) => {
	if (!req.params.id) return res.redirect("/");
	let page = Number(req.query.p || 1);
	try {
		res.render("playlist.ejs", {
			playlist: await ytpl(req.params.id, { limit, pages: page }),
			page
		});
	} catch (error) {
		console.error(error);
		res.status(500).render("error.ejs", {
			title: "ytpl Error",
			content: error
		});
	}
});

// チャンネル
app.get("/c.pdf/:id", async (req, res) => {
	if (!req.params.id) return res.redirect("/");
	let page = Number(req.query.p || 1);
	try {
		res.render("channel.ejs", {
			channel: await ytpl(req.params.id, { limit, pages: page }),
			page
		});
	} catch (error) {
		console.error(error);
		res.status(500).render("error.ejs",{
			title: "ytpl Error",
			content: error
		});
	}
});

// サムネ読み込み
app.get("/vi*", (req, res) => {
	let stream = miniget(`https://i.ytimg.com/${req.url.split("?")[0]}`, {
		headers: {
			"user-agent": user_agent
		}
	});
	stream.on('error', err => {
		console.log(err);
		res.status(500).send(err.toString());
	});
	stream.pipe(res);
});

// チャンネル画像読み込み
app.get("/ytc/:id", (req, res) => {
    const channelId = req.params.id;
    const imageUrl = `https://yt3.ggpht.com/ytc/${channelId}=s900-c-k-c0xffffffff-no-rj-mo`;
    let stream = miniget(imageUrl, {
        headers: {
            "user-agent": user_agent
        }
    });
    stream.on('error', err => {
        console.log(err);
        res.status(500).send(err.toString());
    });
    stream.pipe(res);
});

//tool
app.get("/tool",(req, res) => {
  res.render("../tool/n/home.ejs")
})

app.get("/tool/n/comment/:id",(req, res) => {
  const id = req.params.id;
  res.render("../tool/n/comment.ejs", {id})
})

app.get('/tool/:id', (req, res) => {
  const id = req.params.id;
  res.render(`../tool/${id}.ejs`, { id: id });
});

//tst
app.get("/tst1234",(req, res) => {
  res.render("../tst.ejs")
})

//urlでYouTube動画を探す
app.get("/urls",(req, res) => {
  res.render("../views/url.ejs")
})

//blog
app.get("/blog",(req, res) => {
  res.render("../views/blog.ejs")
})
app.get('/blog/:id', (req, res) => {
  const id = req.params.id;
  res.render(`blog/${id}`, { id: id });
});

//ネタ
app.get("/neta",(req, res) => {
  res.render("../views/neta.ejs")
})
app.get('/neta/:id', (req, res) => {
  const id = req.params.id;
  res.render(`neta/${id}`, { id: id });
});

//お問い合わせ
app.get("/send",(req, res) => {
  res.render("../views/send.ejs")
})

//apps
app.get("/app",(req, res) => {
  res.render("../public/apps.ejs")
})

//game
app.get('/game/:id', (req, res) => {
  const id = req.params.id;
  res.render(`../game/${id}.ejs`, { id: id });
});

//proxy
app.get("/proxy/",(req, res) => {
  res.render("../read/proxy.ejs")
})

//設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

function parseCookies(request) {
    const list = {};
    const cookieHeader = request.headers.cookie;

    if (cookieHeader) {
        cookieHeader.split(';').forEach(cookie => {
            let parts = cookie.split('=');
            list[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }

    return list;
}

app.get('/setting', (req, res) => {
    const cookies = parseCookies(req);
    const wakames = cookies.wakames === 'true';
    const wakametubeumekomi = cookies.wakametubeumekomi === 'true';
    res.render('setting.ejs', { wakames, wakametubeumekomi });
});

app.post('/setting', (req, res) => {
    const wakames = req.body.wakames === 'on';
    const wakametubeumekomi = req.body.wakametubeumekomi === 'on';

    res.setHeader('Set-Cookie', [
        `wakames=${wakames}; HttpOnly; Max-Age=31536000`,
        `wakametubeumekomi=${wakametubeumekomi}; HttpOnly; Max-Age=31536000`
    ]);
    
    res.redirect('/setting');
});

//proxy
app.get('/proxy/:id', (req, res) => {
  const id = req.params.id;
  res.render(`../read/proxy/${id}.ejs`, { id: id });
});

//html取得
app.get('/gethtml/:encodedUrl', async (req, res) => {
  const { encodedUrl } = req.params;
  
  const replacedUrl = decodeURIComponent(encodedUrl);
  
  const url = replacedUrl.replace(/\.wakame02\./g, '.');

  if (!url) {
    return res.status(400).send('URLが入力されていません');
  }
  
  try {
    const response = await axios.get(url);
    const html = response.data;
    res.setHeader('Content-Type', 'text/plain');
    res.send(html);
  } catch (error) {
    res.status(500).send('URLの取得に失敗しました');
  }
});
app.get('/getinv/:encodedUrl', async (req, res) => {

  const { encodedUrl } = req.params;
  const replacedUrl = decodeURIComponent(encodedUrl);
  const invurl = replacedUrl.replace(/\.wakame02\./g, '.');
  const videoId = "H08YWE4CIFQ";
  
  try {
    const videoInfo = await axios.get(`${invurl}/api/v1/videos/H08YWE4CIFQ`);
    
    const formatStreams = videoInfo.formatStreams || [];
    const streamUrl = formatStreams.reverse().map(stream => stream.url)[0];
    
    const templateData = {
      stream_url: streamUrl,
      videoId: videoId,
      channelId: videoInfo.authorId,
      channelName: videoInfo.author,
      channelImage: videoInfo.authorThumbnails?.[videoInfo.authorThumbnails.length - 1]?.url || '',
      videoTitle: videoInfo.title,
      videoDes: videoInfo.descriptionHtml,
      videoViews: videoInfo.viewCount,
      likeCount: videoInfo.likeCount
    };

    res.render('Yukiyoutube-mod', templateData);
  } catch (error) {
        res.status(500).render('matte', { 
      videoId, 
      error: '動画を取得できません', 
      details: error.message 
    });
  }
});
//わかめproxy
app.get('/getpage/:encodedUrl', async (req, res) => {
  const { encodedUrl } = req.params;
  
  const replacedUrl = decodeURIComponent(encodedUrl);
  
  const url = replacedUrl.replace(/\.wakame02\./g, '.');

  if (!url) {
    return res.status(400).send('URLが入力されていません');
  }
  
  try {
    const response = await axios.get(url);
    const html = response.data;
    res.send(html);
  } catch (error) {
    res.status(500).send('URLの取得に失敗しました');
  }
});

//強化版わかめproxy
app.get('/getwakame/:encodedUrl', async (req, res) => {
  const { encodedUrl } = req.params;
  if (!encodedUrl) {
    return res.status(400).send('URLが入力されていません');
  }

  const replacedUrl = decodeURIComponent(encodedUrl).replace(/\.wakame02\./g, '.');

  try {
    const response = await axios.get(replacedUrl);
    
    if (response.status !== 200) {
      return res.status(response.status).send('URLの取得に失敗しました');
    }

    let html = response.data;
    const baseUrl = new URL(replacedUrl);
    console.log(baseUrl)
//リンク
  html = html.replace(/<a\s+([\s\S]*?)href="([\s\S]*?)"([\s\S]*?)>([\s\S]*?)<\/a>/g, (match, beforeHref, url, afterHref, innerText) => {
  let absoluteUrl;

  try {
    if (url.startsWith('http') || url.startsWith('https')) {
      absoluteUrl = url;
    } else {
      absoluteUrl = new URL(url, baseUrl).href;
    }
  } catch (e) {
    console.error('Error parsing URL:', url, e);
    return match;
  }

  const replacedAbsoluteUrl = absoluteUrl.replace(/\./g, '.wakame02.');
  const encoded = encodeURIComponent(replacedAbsoluteUrl);

  return `<a ${beforeHref}href="/getwakame/${encoded}"${afterHref}>${innerText}</a>`;
});

//image
html = html.replace(/<img\s+([\s\S]*?src="([\s\S]*?)"[\s\S]*?)>/g, (match, fullTag, url) => {
  let absoluteUrl;
  if (url.startsWith('http') || url.startsWith('https')) {
    absoluteUrl = url;
  } else {
    absoluteUrl = new URL(url, baseUrl).href;
  }

  const encodedString = Buffer.from(absoluteUrl).toString('base64');
  const replacedAbsoluteUrl = encodedString.replace(/\./g, '.wakame02.');
  const encoded = encodeURIComponent(replacedAbsoluteUrl);

  return `<img ${fullTag.replace(url, `/getimage/${encoded}`)}>`;
});
//css
    const linkTags = html.match(/<link\s+[^>]*href="([^"]+)"[^>]*>/g);

    if (linkTags) {
      for (const match of linkTags) {
        const href = match.match(/href="([^"]+)"/)[1];
        let absoluteUrl;
        if (href.startsWith('http') || href.startsWith('https') || href.startsWith('//')) {
          absoluteUrl = href;
        } else {
            absoluteUrl = new URL(href, baseUrl).href;
        }

        try {
          const cssResponse = await axios.get(absoluteUrl);
          if (cssResponse.status === 200) {
            html = html.replace(match, `<style>${cssResponse.data}</style>`);
          }
        } catch (error) {
          console.error('CSSの取得に失敗しました:', error.message);
        }
      }
    }
    
    res.send(html);
  } catch (error) {
    console.error('Error fetching URL:', error.message);
    res.status(500).send('サーバーエラー：URLの取得に失敗しました');
  }
});

//画像取得
function decodeBase64Url(encodedUrl) {
    return Buffer.from(encodedUrl, 'base64').toString('ascii');
}
app.get('/getimage/:encodedUrl', (req, res) => {
  const encodedUrl = req.params.encodedUrl;
  const decodedUrl = decodeBase64Url(encodedUrl);
  const imageUrl = decodedUrl.replace(/\.wakame02\./g, '.');
    miniget(imageUrl)
        .on('error', (err) => {
            console.error('Error fetching image:', err);
            res.status(500).send('Error fetching image');
        })
        .pipe(res);
});

//わかめMusic
const scdl = require('soundcloud-downloader').default;

app.get('/wakams', (req, res) => {
    res.render('wakamusic', { tracks: [] , query: [] });
});

app.get('/wakamc', async (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.status(400).send('Search query is required');
    }

    try {
        const searchResults = await scdl.search({ query: query, resourceType: 'tracks' });

        const tracks = searchResults.collection.slice(0, 10).map(track => ({
            id: track.id,
            title: track.title,
            username: track.user.username,
            artwork_url: track.artwork_url ? track.artwork_url.replace('-large', '-t500x500') : 'https://via.placeholder.com/500'
        }));

        res.render('wakamusic', { tracks: tracks , query: query });
    } catch (error) {
        console.error('Error occurred while searching:', error);
        res.status(500).send('えらー。あらら');
    }
});

app.get('/okiniiri', (req, res) => {
    let favorites = [];

    const cookie = req.headers.cookie
        .split('; ')
        .find(row => row.startsWith('wakamemusicfavorites='));

    if (cookie) {
        try {
            favorites = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        } catch (error) {
            console.error('Error parsing cookie:', error);
        }
    }

    res.render('okiniiri', { tracks: favorites });
});

app.get('/wakamc/f', (req, res) => {
    let favorites = [];

    const cookie = req.headers.cookie
        .split('; ')
        .find(row => row.startsWith('wakamemusicfavorites='));

    if (cookie) {
        try {
            favorites = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        } catch (error) {
            console.error('Error parsing cookie:', error);
        }
    }

    res.render('wakamemusicf', { favorites: favorites });
});

//お気に入り
app.get('/wakameokini', (req, res) => {
    let favorites = [];

    const cookie = req.headers.cookie
        .split('; ')
        .find(row => row.startsWith('wakametubefavorites='));

    if (cookie) {
        try {
            favorites = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        } catch (error) {
            console.error('Error parsing cookie:', error);
        }
    }
    res.render('wakameokiniiri', { tracks: favorites });
});


//履歴
app.get('/wakamehistory', (req, res) => {
    let favorites = [];

    const cookie = req.headers.cookie
        .split('; ')
        .find(row => row.startsWith('wakametubehistory='));

    if (cookie) {
        try {
            favorites = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        } catch (error) {
            console.error('Error parsing cookie:', error);
        }
    }
    res.render('wakamehistory', { tracks: favorites });
});

//サジェスト
app.get('/suggest', (req, res) => {
    const keyword = req.query.keyword;
    const options = {
        hostname: 'www.google.com',
        path: `/complete/search?client=youtube&hl=ja&ds=yt&q=${encodeURIComponent(keyword)}`,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0'
        }
    };
    const request = http.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            const jsonString = data.substring(data.indexOf('['), data.lastIndexOf(']') + 1);

            try {
                const suggestionsArray = JSON.parse(jsonString);
                const suggestions = suggestionsArray[1].map(i => i[0]);
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.json(suggestions);
            } catch (error) {
                console.error('JSON parse error:', error);
                res.status(500).send({ error: 'えらー。あらら' });
            }
        });
    });
    request.on('error', (error) => {
        console.error('Request error:', error);
        res.status(500).send({ error: 'えらー。あらら' });
    });
    request.end();
});

//概要欄用リダイレクト
app.get('/watch', (req, res) => {
  const videoId = req.query.v;
  if (videoId) {
    res.redirect(`/w/${videoId}`);
  } else {
    res.redirect(`/`);
  }
});
app.get('/channel/:id', (req, res) => {
  const id = req.params.id;
    res.redirect(`/c/${id}`);
});
app.get('/channel/:id/join', (req, res) => {
  const id = req.params.id;
  res.redirect(`/c/${id}`);
});
app.get('/hashtag/:des', (req, res) => {
  const des = req.params.des;
  res.redirect(`/s?q=${des}`);
});

//リダイレクト
app.get('/redirect', (req, res) => {
  const subp = req.query.p;
  const id= req.query.id;
  if (id) {
    res.redirect(`/${subp}/${id}`);
  } else {
    res.redirect(`/${subp}`);
  }
});

//偽エラー画面
app.get("/block/cc3q",(req, res) => {
    let referer = req.get('Referer') || 'No referer information';
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('../views/tst/2.ejs', { ip: ip });
})

// エラー
app.use((req, res) => {
	res.status(404).render("error.ejs", {
		title: "404 Not found",
	});
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.log("Your app is now listening on port", listener.address().port);
});

process.on("unhandledRejection", console.error);
