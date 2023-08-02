import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { PostType } from './components/Post';

import './global.css';

import styles from './App.module.css';


const posts: PostType[]= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jakeliny.png',
      name: 'Jakeliny Gracielly',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jakeliny.design/doctorcarep'},                
    ],
    publishedAt: new Date('2023-08-01 11:17'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jakeliny.design/doctorcarep'},                
    ],
    publishedAt: new Date('2023-07-29 17:30'),
  },
]


export function App() {
    return (
      <div>
        <Header/>

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                
                />
              )
            })}
          </main>
        </div>
      </div>
  )
    
}