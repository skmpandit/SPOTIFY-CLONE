import {BsFillPauseFill,BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import {playState, playingTrackState} from  "../atoms/playerAtom";

function Poster({track,chooseTrack}) {

    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

    const handlePlay = () => {
        chooseTrack(track);
        if(track.uri === playingTrack.uri) {
            setPlay(!play);
        }
    }

    return (
        <div className="w-[260px] h-[360px] rounded-[50px]  overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out " onClick={handlePlay}>
            <img src={track.albumUrl} alt="" className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-80 "/>
            <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center  space-x-3.5">
                <div className="h-10 w-10 bg-[#15883e] items-center flex  rounded-full justify-center group-hover:bg-[#1db954] flex-shrink-0">
                    {track.uri === playingTrack.uri && play ? (
                        <BsFillPauseFill className="text-xl text-white"/>
                    ) : (
                        <BsFillPlayFill className="text-xl text-white ml-[1px]"/>
                    )}
                </div>
                <div>
                    <h4 className="font-extrabold truncate w-44">{track.title}</h4>
                    <h6>{track.artist}</h6>
                </div>
            </div>
        </div>
    )
}

export default Poster
