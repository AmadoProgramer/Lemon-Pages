import React, { useState } from "react";
import "./feed.css";

const postsData = [
  {
    id: 1,
    username: "bookworm_maria",
    userAvatar: "👩‍🦰",
    location: "Bogotá, Colombia",
    bookImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop",
    likes: 2345,
    isLiked: false,
    isSaved: false,
    caption: "Terminé de leer Cien años de soledad y no tengo palabras. Una obra maestra del realismo mágico que te transporta a Macondo desde la primera página.",
    commentsCount: 89,
    timeAgo: "Hace 2 horas",
    bookTitle: "Cien años de soledad",
    author: "Gabriel García Márquez"
  },
  {
    id: 2,
    username: "lector_tech",
    userAvatar: "👨‍💻",
    location: "Ciudad de México",
    bookImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=600&fit=crop",
    likes: 1876,
    isLiked: false,
    isSaved: false,
    caption: "1984 de Orwell. Distópico, aterrador y más relevante que nunca en nuestra era digital. Gran hermano te está observando.",
    commentsCount: 45,
    timeAgo: "Hace 5 horas",
    bookTitle: "1984",
    author: "George Orwell"
  },
  {
    id: 3,
    username: "fantasy_lover",
    userAvatar: "🧙‍♀️",
    location: "Buenos Aires, Argentina",
    bookImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop",
    likes: 3102,
    isLiked: false,
    isSaved: false,
    caption: "Comenzando mi aventura por la Tierra Media con El Hobbit. Bilbo Bolsón me tiene completamente enganchada!",
    commentsCount: 123,
    timeAgo: "Hace 1 día",
    bookTitle: "El Hobbit",
    author: "J.R.R. Tolkien"
  }
];

// Icon components to replace lucide-react
const HeartIcon = ({ filled = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MessageCircleIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const SendIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const BookmarkIcon = ({ filled = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const HomeIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SearchIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusSquareIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

function Post({ post: initialPost }) {
  const [post, setPost] = useState(initialPost);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, username: "reader_ana", avatar: "👩", text: "Me encanta este libro! Lo recomiendo totalmente", time: "2h" },
    { id: 2, username: "book_enthusiast", avatar: "📚", text: "Tengo que leerlo", time: "1h" }
  ]);

  const handleLike = () => {
    setPost({
      ...post,
      isLiked: !post.isLiked,
      likes: post.isLiked ? post.likes - 1 : post.likes + 1
    });
  };

  const handleSave = () => {
    setPost({ ...post, isSaved: !post.isSaved });
  };

  const handleComment = () => {
    if (comment.trim()) {
      setComments([...comments, {
        id: Date.now(),
        username: "tu_usuario",
        avatar: "😊",
        text: comment,
        time: "ahora"
      }]);
      setComment("");
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <div className="user-avatar">
            {post.userAvatar}
          </div>
          <div className="user-info">
            <span className="username">{post.username}</span>
            {post.location && <span className="location">{post.location}</span>}
          </div>
        </div>
        <button className="action-button">
          <MoreHorizontalIcon />
        </button>
      </div>

      <div className="post-image">
        <img 
          src={post.bookImage} 
          alt={post.bookTitle}
        />
      </div>

      <div className="post-actions">
        <div className="action-buttons">
          <button 
            className="action-button"
            onClick={handleLike}
          >
            <HeartIcon filled={post.isLiked} />
          </button>
          <button 
            className="action-button"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircleIcon />
          </button>
          <button className="action-button">
            <SendIcon />
          </button>
        </div>
        <button 
          className="action-button"
          onClick={handleSave}
        >
          <BookmarkIcon filled={post.isSaved} />
        </button>
      </div>

      <div className="post-info">
        <p className="likes-count">{post.likes.toLocaleString()} Me gusta</p>
        
        <div className="caption">
          <span className="caption-username">{post.username}</span>
          <span>{post.caption}</span>
        </div>

        <button 
          className="view-comments"
          onClick={() => setShowComments(!showComments)}
        >
          Ver los {post.commentsCount} comentarios
        </button>

        {showComments && (
          <div className="comments-section">
            {comments.map(c => (
              <div key={c.id} className="comment">
                <span className="comment-avatar">{c.avatar}</span>
                <div className="comment-content">
                  <p className="comment-text">
                    <span className="comment-username">{c.username}</span>
                    {c.text}
                  </p>
                  <p className="comment-time">{c.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="post-time">{post.timeAgo}</p>

        <div className="add-comment">
          <span className="comment-avatar">😊</span>
          <input
            type="text"
            placeholder="Agrega un comentario..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleComment()}
            className="comment-input"
          />
          <button
            onClick={handleComment}
            disabled={!comment.trim()}
            className="post-comment"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BookstagramFeed() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="feed-container">
      <header className="feed-header">
        <div className="header-content">
          <h1 className="feed-title">Bookstagram</h1>
          <div className="header-icons">
            <button className="icon-button">
              <HeartIcon />
              <span className="notification-badge">12</span>
            </button>
            <button className="icon-button">
              <MessageCircleIcon />
              <span className="notification-badge">3</span>
            </button>
          </div>
        </div>
      </header>

      <main className="feed-main">
        {postsData.map(post => (
          <Post key={post.id} post={post} />
        ))}

        <div className="suggestions">
          <div className="suggestions-header">
            <span className="suggestions-title">Sugerencias para ti</span>
            <button className="see-all">Ver todo</button>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="suggestion-item">
              <div className="suggestion-user">
                <div className="suggestion-avatar">
                  📖
                </div>
                <div className="suggestion-info">
                  <p className="suggestion-username">book_lover_{i}</p>
                  <p className="suggestion-followers">Seguido por user123 + 2 más</p>
                </div>
              </div>
              <button className="follow-button">Seguir</button>
            </div>
          ))}
        </div>
      </main>

      <nav className="feed-nav">
        <div className="nav-content">
          <button
            onClick={() => setActiveTab('home')}
            className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
          >
            <HomeIcon />
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`nav-button ${activeTab === 'search' ? 'active' : ''}`}
          >
            <SearchIcon />
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`nav-button ${activeTab === 'add' ? 'active' : ''}`}
          >
            <PlusSquareIcon />
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`nav-button ${activeTab === 'activity' ? 'active' : ''}`}
          >
            <HeartIcon />
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`nav-button ${activeTab === 'profile' ? 'active' : ''}`}
          >
            <div className="profile-button">
              📚
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}