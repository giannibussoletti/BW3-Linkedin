import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"

const TokenPaolo =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDU4NDA2YmJlOTAwMTVkZWU1N2UiLCJpYXQiOjE3NzkwOTQ5MTYsImV4cCI6MTc4MDMwNDUxNn0.76kWBS67r5ygr_d-wqdXMOaMNYRsOUCAvuKafyaiAHA"

const FeedPostCard = () => {
  const [posts, setPosts] = useState([])
  const [commentsByPost, setCommentsByPost] = useState({})
  const [openComments, setOpenComments] = useState({})
  const [likedPosts, setLikedPosts] = useState({})

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: `Bearer ${TokenPaolo}`,
          },
        },
      )

      const data = await response.json()

      const sortedPosts = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      )

      setPosts(sortedPosts)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchComments = async postId => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${TokenPaolo}`,
          },
        },
      )

      const data = await response.json()

      setCommentsByPost(prev => ({
        ...prev,
        [postId]: data,
      }))

      setOpenComments(prev => ({
        ...prev,
        [postId]: !prev[postId],
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const toggleLike = postId => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {posts.slice(0, 10).map(post => (
        <Card key={post._id} className="w-100 shadow-sm mb-3">
          <Card.Body>
            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex gap-2">
                <img
                  src={post.user?.image}
                  alt="profile"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <h6 className="mb-0 fw-bold">
                    {post.user?.name} {post.user?.surname}
                  </h6>

                  <p className="mb-0 text-muted small">
                    {post.user?.title}
                  </p>

                  <p className="mb-0 text-muted small">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <span className="fw-bold">...</span>
                <span style={{ cursor: "pointer" }}>✕</span>
              </div>
            </div>

            {/* POST CONTENT */}
            <div className="mt-3">
              <p>{post.text}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="w-100 rounded"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>

            {/* FOOTER */}
            <div className="d-flex justify-content-between mt-3 text-muted small">
              <span>👍 {likedPosts[post._id] ? 1 : 0}</span>

              <span>
                {commentsByPost[post._id]?.length || 0} comments
              </span>
            </div>

            <hr />

            {/* ACTIONS */}
            <div className="d-flex justify-content-around text-muted">
              {/* LIKE */}
              <button
                type="button"
                onClick={() => toggleLike(post._id)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: likedPosts[post._id]
                    ? "black"
                    : "rgb(74, 85, 101)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill={likedPosts[post._id] ? "black" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M6 11.5V21m13.5 0H2v-9.5h4L8.5 3h.9A3.6 3.6 0 0 1 13 6.6V9h9z"
                  />
                </svg>
              </button>

              {/* COMMENTS */}
              <button
                type="button"
                onClick={() => fetchComments(post._id)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: openComments[post._id]
                    ? "black"
                    : "rgb(74, 85, 101)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M17 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1c.35 0 .687-.06 1-.17v5.446c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.01 1.01 0 0 1-1.4-.199a.98.98 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h9.57c-.11.313-.17.65-.17 1H4.6C3.704 4 3 4.713 3 5.566v6.71c0 .853.704 1.566 1.6 1.566h1.6V17h.003l.002-.001l4.276-3.157H15.4c.896 0 1.6-.713 1.6-1.566z"
                  />
                </svg>
              </button>

              {/* REPOST */}
              <span style={{ cursor: "pointer" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ color: "rgb(74, 85, 101)" }}
                >
                  <path
                    fill="currentColor"
                    d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3z"
                  />
                </svg>
              </span>

              {/* SEND */}
              <span style={{ cursor: "pointer" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ color: "rgb(74, 85, 101)" }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.846 7.151a.75.75 0 0 0-.228 1.376l6.517 3.915l6.22-4.355a.75.75 0 0 1 .86 1.229l-6.22 4.355l1.45 7.463a.75.75 0 0 0 1.372.256L22.792 3.94a.75.75 0 0 0-.793-1.133z"
                  />
                </svg>
              </span>
            </div>

            {/* COMMENTS */}
            {openComments[post._id] && (
              <div className="mt-3">
                {commentsByPost[post._id]?.length > 0 ? (
                  commentsByPost[post._id].map(comment => (
                    <div
                      key={comment._id}
                      className="border rounded p-2 mb-2"
                    >
                      <p className="mb-1">{comment.comment}</p>

                      <small className="text-muted">
                        ⭐ {comment.rate}
                      </small>
                    </div>
                  ))
                ) : (
                  <p className="text-muted small mb-0">
                    No hay comentarios
                  </p>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default FeedPostCard