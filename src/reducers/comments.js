import  {SAVE_COMMENT,FETCH_COMMENTS} from 'actions/types';

export default function(state = [],action){ // reducer
    switch(action.type){

        case SAVE_COMMENT:
                 return  [...state, action.payload , {}]
                 default:
                 return state;
         

         case FETCH_COMMENTS:
         
        const comments =  action.payload.data.map(comment => comment.name)
            return  [...state,...comments]
    }
}