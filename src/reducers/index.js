import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: "Like i'm gonna lose you", duration: '3:46'},
        { title: 'Rockabye', duration: '4:14'},
        { title: 'Attention', duration: '3:52'},
        { title: 'Shape of you', duration: '4:24'},
        { title: 'Havana', duration: '3:39'}
    ]
};


const selectedSongReducer = (selectedSong= null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
       return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});
