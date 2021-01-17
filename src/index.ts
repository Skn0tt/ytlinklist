const linklist = document.getElementById("linklist") as HTMLTextAreaElement;

function drawRandom<T>(...arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillInRandomLink() {
  linklist.innerText = drawRandom(
    "https://www.youtube.com/watch?v=NYtjttnp1Rs"
  );
}

fillInRandomLink();

function getVideoId(link: string): string | undefined {
  const match = link.match(/\?v=([\w-]+)/);
  if (!match) {
    return;
  }

  return match[1];
}

document.getElementById("create-playlist").onclick = () => {
  const links = linklist.value.split("\n");

  const ids = links.map(getVideoId).filter(Boolean);
  const youtubeLink =
    "https://www.youtube.com/watch_videos?video_ids=" + ids.join(",");

  window.open(youtubeLink, "_blank");
};
