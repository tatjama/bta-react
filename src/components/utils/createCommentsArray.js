const createCommentsArray = (query, comments) =>{
    const commentsArrayFromStorage = JSON.parse(localStorage.getItem('commentsArray')) || []
    function checkIdOnArray(commentFromStorage){
        return commentFromStorage.result_object.location_id === query
    }
    const commentsFilterArray = commentsArrayFromStorage.filter(checkIdOnArray)
    const newCommentsFilterArray = commentsFilterArray.map(comment => comment.comment )
    const commentsArray = newCommentsFilterArray.concat(comments)
   return commentsArray
}
export default createCommentsArray;