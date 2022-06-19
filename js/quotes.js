const quotes = [
{
    lyrics: "눈물을 참지 못해 문득 고개를 들면 반짝이는 별을 따라 다시 돌아올 길을 찾을거야",
    song: "북극성 (Never Goodbye)",
},
{
    lyrics: "잠깐 흔들려도 돼 멀리 돌아가도 돼 즐길 수 있으면 돼 결국 행복하면 돼",
    song: "오르골 (Life Is Still Going On)",
},
{
    lyrics: "너로 인해 너의 너로부터 널 위해 이루어진 모든 감정, 짧은 순간 넌 내 시가 되고 나를 눈물 나게 해",
    song: "주인공 (Irreplaceable)",
},
{
    lyrics: "아무도 없는 곳에 우리 둘 뿐이었음해 네 생각이 아침까지 베개가 돼",
    song: "ANL",
},
{
    lyrics: "심각해 널 스치는 바람마저 질투해 네 뺨에 내려앉은 달빛도 annoying me",
    song: "고래 (Dive Into You)",
},
{
    lyrics: "이거 하나만 잊지 마 아주 먼 어느 밤 너를 위로할 별 하나 아마 나일거야",
    song: "Dear Dream",
},
{
    lyrics: "비는 질색인데 오늘 좀 좋아지려해 아니 아직 그칠 생각은 말고 왼쪽 어깨는 흠뻑 적셔놔도 돼",
    song: "우산 (Love Song)",
},
{
    lyrics: "나를 구하는 것은 나일 뿐 뭐든 될 수 있어 할 수 있어 한계를 시험해",
    song: "Superhuman",
},
{
    lyrics: "현실이 꿈이고 꿈이 현실같아 눈을 뜨고 꿈을 꾸는 것만 같아 사람들은 이걸 사랑이라 말해",
    song: "My Page",
},
{
    lyrics: "예전 그날의 나를 보면 \"넌 잘하고 있어\" 그렇게 말을 해주고 싶어",
    song: "Dreams Come True",
},
{
    lyrics: "날개를 펼치고 또 꺾이고 다쳐도 누구보다 강한 너잖아 미래의 미래에도 널 사랑할 나란걸",
    song: "Hello Future",
}
]

const lyrics = document.querySelector("#quote span:first-child");
const song = document.querySelector("#quote span:last-child");

const todaysLyrics = quotes[Math.floor(Math.random() * quotes.length)];

lyrics.innerText = todaysLyrics.lyrics;
song.innerText = `♫ ${todaysLyrics.song}`;