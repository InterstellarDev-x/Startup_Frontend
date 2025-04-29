
import axios from "axios";




export interface TeamMember {
  name: string;
}

export interface IdeaSubmission {
  Teamid?: number;
  name: string;
  contactEmail: string;
  description: string;
  status?: "Pending" | "Accepted" | "Rejected";
  SubmittedAt?: string;
  teamMembers: TeamMember[];
}


export const API_URL = "https://startup2backend-production.up.railway.app/api/v1";



export const getAllIdeas = async (): Promise<{ response: IdeaSubmission[] }> => {
  try {

    const response = await axios({
        url : API_URL + "/admin/submissions",
        method : "get",
        headers : {
            token : localStorage.getItem("token")
        }
    })

    return response.data
    
  } catch (error) {
    console.error("Error fetching ideas:", error);
    
    return { response: [] };
  }
};


export const getIdeaById = async (id: number): Promise<IdeaSubmission | null> => {
  try {

  const response = await axios({
    url : API_URL + "/admin/submissions/" + id,
    method : "get",
    headers : {
        token : localStorage.getItem("token")
    }
  })
  
   return response.data
    

  } catch (error) {
    console.error(`Error fetching idea ${id}:`, error);
   
    return null;
  }
};

// POST a new idea
// export const createIdea = async (idea: IdeaSubmission): Promise<IdeaSubmission | null> => {
//   try {
//     // Use this when API is available
//     // const response = await fetch(API_URL, {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(idea),
//     // });
//     // if (!response.ok) {
//     //   throw new Error('Failed to create idea');
//     // }
//     // return await response.json();
    
//     // Using mock data until API is provided
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const newIdea = {
//           ...idea,
//           Teamid: Date.now(), // simulate server-generated ID
//           status: "Pending",
//           SubmittedAt: new Date().toISOString(),
//         };
//         mockIdeas.push(newIdea);
//         resolve(newIdea);
//       }, 500);
//     });
//   } catch (error) {
//     console.error("Error creating idea:", error);
//     toast.error("Failed to create idea. Please try again.");
//     return null;
//   }
// };






export const deleteIdea = async (id: number): Promise<boolean> => {
  try {
    const response = await axios({
        url : API_URL + "/admin/submissions/" + id,
        method : "delete",
        headers : {
            token : localStorage.getItem("token")
        }
      })
      
       return response.data
  } catch (error) {
    console.error(`Error deleting idea ${id}:`, error);
  
    return false;
  }
};


export const updateIdeaStatus = async ({
    id,
    status
  }: {
    id: number;
    status: "Accepted" | "Rejected";
  }): Promise<IdeaSubmission | null> => {
    try {
      const response = await axios({
        url: `${API_URL}/admin/submissions/${id}`,
        method: "put",
        headers: {
          token:
            localStorage.getItem("token")
        },
        data: {
          status
        }
      });
  
      return response.data;
    } catch (error) {
      console.error(`Error updating idea status ${id}:`, error);
      return null;
    }
  };