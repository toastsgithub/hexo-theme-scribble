console.log('local-search enabled')

async function initSearch() {
    const postMeta = await fetch('/search.json').then(res => res.json())
    const $searchContainer = document.getElementById('search-container')
    const $input = document.querySelector('#search-container .input > input')
    const toggleSearch = () => {
        const currentDisplay = getComputedStyle($searchContainer).getPropertyValue('display')
        $searchContainer.style.display = currentDisplay === 'none' ? 'flex' : 'none'
        $input.focus()
    }
    const performSearch = debounce((keyword) => {
        const $body = $('#search-container .result')
        $body.empty()
        if (!keyword) {
            $body.append($(`<div class='empty-result'>没有找到😁 </div>`))
            return
        }
        $body.append(
            $(postMeta
                .filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()))
                .map(post => `<div class='search-result-item'><a href="${post.url}">${post.title}</a></div>`)
                .join('\n')
            )
        )
    }, 500)
    $input.addEventListener('input', e => {
        performSearch(e.target.value)
    })
    $input.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            toggleSearch()
        }
    })
    window.addEventListener('keydown', e => {
        if (e.metaKey && e.code === 'Slash') toggleSearch()
    })
}

initSearch()