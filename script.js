const search = document.getElementById('search');
const searchText = document.getElementById('searchText');
const searchButton = document.getElementById('searchButton');
const result = document.getElementById('result');

search.addEventListener('submit', async (e) => {
    e.preventDefault();
    result.style.color = 'black';
    result.textContent = '読み込み中...';
    try{
    const res = await fetch(`https://api.github.com/users/${searchText.value}`);
    if (!res.ok) {
        result.style.color = 'red';

        if (res.status === 404) {
            result.textContent = '※有効なユーザー名を入力してください';
        } else {
            result.textContent = 'エラーが発生しました';
        }
        return;
    }
    const data = await res.json();
    console.log(data);
    result.style.color = 'black';
    result.innerHTML = `
    <img src="${data.avatar_url}" width="100" height="100" alt="${data.login}のアバター">
    <p>名前: ${data.name || 'なし'}</p>
    <p>ユーザー名: @${data.login}</p>
    <p>📦 リポジトリ: ${data.public_repos}</p>
    <p>👥 フォロワー: ${data.followers}</p>
    <p>
    🔗 URL: <a href="https://github.com/${data.login}" target="_blank" rel="noopener noreferrer"> https://github.com/${data.login}</a>
    </p>
`;
    } catch (error){
        console.error('Error',error);
        result.style.color = 'red';
        result.textContent = 'ネットワークエラーが発生しました';
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchText) {
        e.preventDefault();
        searchText.focus();
    }
})
