import IdeaCard from "../ui/CardComponetDashoard";
import { useQuery } from "@tanstack/react-query";
import { getAllIdeas } from "../../Services/api";
import Loader from "../ui/Loadex";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const  {  data  , isLoading  , isError }  = useQuery({queryKey : ['ideas'] , queryFn : getAllIdeas   , staleTime : 5 , refetchInterval : 20 })
  
 const Navigate2 = useNavigate()
    
 
 

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 font-Brand">Startup Ideas </h1>
      
      <div className="mb-4 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search ideas..."
          className="border rounded px-3 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button 
          onClick={()=> {
             localStorage.removeItem("token")
             Navigate2("/")}
          }  className="bg-gray-900 text-white px-4 py-2 rounded ml-auto active:scale-90" > Logout</button>
      </div>

      

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold font-SemiBrand">Submitted Ideas</h2>
        <p className="text-sm text-gray-600 font-SemiBrand">Total: {data?.response.length || 0}</p>
      </div>
      {isLoading &&  <div><Loader/></div>}
      {isError && <div>Erorr occured</div>}
      <div className="flex flex-wrap gap-4">
        {data?.response
          .filter((idea) =>
            idea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            idea.contactEmail.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((idea) =>
            statusFilter.toLowerCase() === "all"
              ? true
              //@ts-expect-error(to error to handles alone)
              : idea.status.toLowerCase() === statusFilter.toLowerCase()
          )
          .map((idea) => (
            //@ts-expect-error(to error to handles alone)
            <IdeaCard key={idea.Teamid} idea={idea} />
        ))}
      </div>
    </div>
  );
}
