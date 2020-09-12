class SearcherBing extends Searcher{
    urlApi = "https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q="
    key1 = '11b66270ed184719ad758b027e84c9e2'
    key2 = 'b84b2a896e8246cc9652d1d7b10bbcb2'
    customConfigurationID = '&customconfig=f275cdf4-9523-4cc7-988e-8d44c7eb0332'

    async searchOnTheWeb(word){
        let response = await fetch(this.urlApi+word+this.customConfigurationID,{headers:{
            'Ocp-Apim-Subscription-Key' : this.key1
        }})
        return (await response.json())
    }


}