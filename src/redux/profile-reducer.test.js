import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
   posts: [
      {id: 1, text: "My first post", likesCount: 1},
      {id: 2, text: "Create by react", likesCount: 1},
      {id: 3, text: "Bye", likesCount: 1},
   ],
   textAreaInput: {
      value: "YOYO PERVIY TEST",
   },
}

it('length of posts should be incremented', () => {
   // 1. Create initial Data
   const state = {
      posts: [
         {id: 1, text: "My first post", likesCount: 1},
         {id: 2, text: "Create by react", likesCount: 1},
         {id: 3, text: "Bye", likesCount: 1},
      ],
      textAreaInput: {
         value: "YOYO PERVIY TEST",
      },
   }
   let action = addPost()

   // 2. Action
   let newState = profileReducer(state, action)

   // 3. Expectation
   expect(newState.posts.length).toBe(4)
})

it('text of new post should be correct', () => {

   let action = addPost()
   let newState = profileReducer(state, action)
   expect(newState.posts[newState.posts.length - 1].text).toBe('YOYO PERVIY TEST')
})

it('length of posts should be decremented', () => {
   let action = deletePost(1)
   let newState = profileReducer(state, action)
   expect(newState.posts.length).toBe(state.posts.length - 1)
})

it(`length of posts shouldn't be changed`, () => {
   let action = deletePost('100000')
   let newState = profileReducer(state, action)
   expect(newState.posts.length).toBe(3)
})