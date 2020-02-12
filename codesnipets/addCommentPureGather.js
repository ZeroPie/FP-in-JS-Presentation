const createComment = ({ uid, authorId, text }) => {
  let comment = { uid, authorId, text }
  return createHtmlCommentElement(comment)
}

let comment = {
  uid: generateUid(),
  commentId: 130918,
  message: "Millionen deutschen werden reich mit diesem Trick"
}

const ele = createComment(comment)
commentsList.appendChild(ele)