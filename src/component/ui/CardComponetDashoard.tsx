import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCheck, FaTimes,  FaTrash } from "react-icons/fa";
import { deleteIdea,  updateIdeaStatus } from "../../Services/api";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "./Toast";
export type TeamMember = {
  name: string;
};

export type Idea = {
  Teamid ?: number | undefined;
  name: string;
  contactEmail: string;
  description: string;
  status: string;
  SubmittedAt: string;
  teamMembers: TeamMember[];
};

type IdeaCardProps = {
  idea: Idea;
};




export default function IdeaCard({ idea }: IdeaCardProps) {
 
    const queryclient = useQueryClient()
const toast = useToast()
   const {
  error: deleteError,
  mutate: deleteMutate,
  status: deleteStatus
} = useMutation<boolean, Error, number>({
  mutationFn: deleteIdea,
  onSuccess: () => {
    queryclient.invalidateQueries({ queryKey: ['ideas'] });
  }
});


const {
    mutate: updateMutate,
    error: updateError,
    status: updateStatus
  } = useMutation({
    mutationFn: updateIdeaStatus,
    onSuccess: () => {
        queryclient.invalidateQueries({ queryKey: ['ideas'] });
    }
  });
   


  return (
    <AnimatePresence>
    <motion.div
    
    initial={{
        y:50,
        opacity: 0,
        scale: 0.8
    }}

    animate={{
        y:0,
        opacity: 1,
        scale:1
    }}

    exit={{
        x: '100%',
        opacity: 0
    }}

    transition={{
        duration: .5    ,
        ease : 'easeInOut'
    }}

    whileHover={{
        scale : 1.05
    }}

    
    className="bg-white rounded shadow-lg p-5 mb-4 w-full sm:w-[48%] lg:w-[31%]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold font-SemiBrand rounded-sm">{idea.name}</h2>
        <span
          className={`text-sm px-2 py-1 rounded font-semibold ${
            idea.status === "Accepted"
              ? "bg-green-100 text-green-700"
              : idea.status === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {idea.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2">
        Submitted: {new Date(idea.SubmittedAt).toLocaleString()}
      </p>
      <p className="mb-4 font-LineParagraph">{idea.description}</p>
      <hr />
      <div className="space-y-2 text-sm">
        <div>
          <p className="font-semibold font-SemiBrand">Contact Email:</p>
          <p>{idea.contactEmail}</p>
        </div>
        <div>
          <p className="font-semibold">Team Members:</p>
          <ul>
            {idea.teamMembers.map((member, idx) => (
              <li key={idx}>• {member.name}</li>
            ))}
          </ul>
        </div>
      </div>


      <div className="flex space-x-3 mt-4">
        <button    
        onClick={()=>{
            updateMutate({ id: idea.Teamid!, status: "Accepted" });
        }}
        className="bg-green-100 p-2 rounded hover:bg-green-200">
          <FaCheck />
        </button>
        <button onClick={()=>{
            updateMutate({ id: idea.Teamid!, status: "Rejected" });
        }} 
        className="bg-red-100 p-2 rounded hover:bg-red-200">
          <FaTimes />
        </button>
        
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this idea?")) {
                deleteMutate(idea.Teamid!);
            }
          }}
          className="bg-gray-200 p-2 rounded hover:bg-gray-300"
        >
          <FaTrash />
        </button>
      </div>
      {deleteError && <p className="text-red-600 mt-2">Error deleting idea: {deleteError.message}</p>}
      {deleteStatus === 'pending' && <p className="text-red-300 mt-2">Idea deleting..</p>}

      {deleteStatus === 'success' && (
        <>
          {toast("Idea deleted successfully")}
        </>
      )}
      {updateStatus === 'pending' && <p className="text-green-600 mt-2">Updating...</p>}
     
    
      {updateError && <p className="text-red-600 mt-2">Error deleting idea: {updateError.message}</p>}
    
    
    </motion.div>
    </AnimatePresence>
  );
}