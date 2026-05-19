import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
const TokenPaolo =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDU4NDA2YmJlOTAwMTVkZWU1N2UiLCJpYXQiOjE3NzkwOTQ5MTYsImV4cCI6MTc4MDMwNDUxNn0.76kWBS67r5ygr_d-wqdXMOaMNYRsOUCAvuKafyaiAHA"

const FeedPostCard = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: `Bearer ${TokenPaolo}`,
        },
      })

      const data = await response.json()

      console.log(data)
      const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

      setPosts(sortedPosts)

      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {posts.map((post) => (
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

                  <p className="mb-0 text-muted small">{post.user?.title}</p>

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
              <span>👍 0</span>
              <span>0 comments</span>
            </div>

            <hr />

            {/* ACTIONS */}
            <div className="d-flex justify-content-around text-muted">
              <span style={{ cursor: "pointer" }}>👍 Like</span>
              <span style={{ cursor: "pointer" }}>💬 Comment</span>
              <span style={{ cursor: "pointer" }}>🔁 Repost</span>
              <span style={{ cursor: "pointer" }}>➤ Send</span>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default FeedPostCard
