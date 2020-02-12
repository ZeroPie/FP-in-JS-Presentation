const addComment = (uid, authorId, text) => {
  let comment = {
    uid,
    authorId,
    text
  }
  return createCommentElement(comment)
}

addComment(uid, 130918, "Millionen deutschen werden reich mit diesem Trick")
commentsList.appendChild(ele)