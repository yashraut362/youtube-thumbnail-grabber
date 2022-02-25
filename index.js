function getThumbnail(link, quality) {
    if (link && quality) {
        const videoid = youtube_parser(link)
        if (videoid) {
            switch (quality) {
                case 'max':
                    return `https://i1.ytimg.com/vi/${videoid}/maxresdefault.jpg`
                case 'hq':
                    return `https://i1.ytimg.com/vi/${videoid}/mqdefault.jpg`
                case 'mq':
                    return `https://i1.ytimg.com/vi/${videoid}/hqdefault.jpg`
                case 'sd':
                    return `https://i1.ytimg.com/vi/${videoid}/sddefault.jpg`
                case 'default':
                    return `https://i1.ytimg.com/vi/${videoid}/default.jpg`
                default:
                    return 'Please provide proper input for quality (max,hq,mq,sd,default)'
            }
        } else {
            return 'Please check youtube video link'
        }
    } else {
        return 'Please provide link and quality'
    }
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

module.exports = getThumbnail;
