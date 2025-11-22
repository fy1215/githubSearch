const searchText = document.getElementById('searchText');
const searchButton = document.getElementById('searchButton');
const result = document.getElementById('result');

searchButton.addEventListener('click', async () => {
    if (!searchText.value.trim()) {
        result.style.color = 'red';
        result.innerText = '※ユーザー名を入力してください';
        return;
    }
    result.style.color = 'black';
    result.textContent = '読み込み中...';
    const res = await fetch(`https://api.github.com/users/${searchText.value}`);
    const data = await res.json();
    console.log(data);
    if (data.status === '404') {
        result.style.color = 'red';
        result.innerText = '※有効なユーザー名を入力してください';
        return;
    }
    result.style.color = 'black';
    result.innerHTML = `
    <img src="${data.avatar_url}" width="100px" height="100px"><br>
    <p>名前: ${data.name || 'なし'}</p>
    <p>ユーザー名: @${data.login}</p>
    <p>📦 リポジトリ: ${data.public_repos}</p>
    <p>👥 フォロワー: ${data.followers}</p>
`;
})

document.addEventListener('keyup', (e) => {
    if (e.key === '/') {
        searchText.focus();
    }
})

searchText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});