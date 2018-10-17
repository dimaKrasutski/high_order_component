import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from 'actions/types'


it('handles actions of type SAVE_COMMENT', ()=>{

   const action ={
       type: SAVE_COMMENT,
       payload: "Fake Comment"
   }

   const newState = commentsReducer( [], action)

   expect(newState).toEqual(['Fake Comment'])

})


it('handles action with unknown type', ()=>{

     const newState = commentsReducer([], {type: 'efdefefef'})

     expect(newState).toEqual([])
})