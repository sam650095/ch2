window.onload = function () {
  const currentUrl = window.location.href;

  const fileName = getFileNameFromUrl(currentUrl);

  console.log("Current URL:", currentUrl);
  console.log("File name:", fileName);
  const a_links_style = document.getElementById(fileName);
  a_links_style.classList.add("link-underline-opacity-75");
  a_links_style.classList.remove("link-underline-opacity-0");
};

function getFileNameFromUrl(url) {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  const fileNameMatch = pathname.match(/\/([^\/]+)\.\w+?$/);

  if (fileNameMatch && fileNameMatch[1]) {
    return fileNameMatch[1];
  }
  return "";
}
