const Resultlist = {
  index(posts) {
    return Views.index(posts)
  },
  show(post) {
    return Views.show(post)
  },
  create(attrs) {
    return Db.create(attrs)
  },
  update(post, attrs) {
    return Db.update(post, attrs)
  },
  destroy(post) {
    return Db.destroy(post)
  },
}
