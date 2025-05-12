export const filterEmojis = ({emojisData, searchText = "", maxResults = 20 }) => {

    const filteredEmojis = emojisData.filter(emoji => {

        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }

        if(emoji.keywords.includes(searchText.toLowerCase())) {
            return true
        }

        return false
    })
    // mengambil 20 emoji pertama dari filteredEmojis
    return filteredEmojis.splice(0, maxResults)

}