const addComment = (authorId, text) => {
  let comment = {
    id: genUniqueId(),
    authorId,
    text,
  }
  const ele = createCommentElement(comment)
  commentsList.appendChild(ele)
}

addComment(
  130918,
  "Millionen deutschen werden reich mit diesem Trick"
)
