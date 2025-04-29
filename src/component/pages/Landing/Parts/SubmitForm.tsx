import { useState } from "react";
import { useToast } from "../../../ui/Toast";
import { MdContentCut } from "react-icons/md";
import axios from "axios";
import { API_URL } from "../../../../Services/api";

const SubmitForm = () => {
  const [form, setForm] = useState({
    name: "",
    contactEmail: "",
    description: "",
    teamMembers: [{ name: "" }],
  });
  const toast = useToast()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTeamMemberChange = (index: number, value: string) => {
    const updatedMembers = [...form.teamMembers];
    updatedMembers[index].name = value;
    setForm({ ...form, teamMembers: updatedMembers });
  };

  const addTeamMember = () => {
    if (form.teamMembers.length >= 2) {
      toast("You can only add up to 2 team members.");
      return;
    }
    setForm({ ...form, teamMembers: [...form.teamMembers, { name: "" }] });
  };

  const removeTeamMember = (index: number) => {
    const updatedMembers = form.teamMembers.filter((_, i) => i !== index);
    setForm({ ...form, teamMembers: updatedMembers });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    Postdata();
  };

  async function Postdata() {
    try {
      const response = await axios({
        method: "post",
        url: API_URL + "/form/submit-idea",
        data: {
          name: form.name,
          contactEmail: form.contactEmail,
          description: form.description,
          teamMembers: form.teamMembers,
        },
      });
      console.log(response.data);
   
      if(response.data){
        toast("Submitted..")
      }

      setForm({ name: "", contactEmail: "", description: "", teamMembers: [{ name: "" }] });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (

 


    <div className="w-full bg-white p-4">
      <h2 className="text-3xl md:text-4xl font-SemiHeadLine font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-6">
        🚀 Pitch Your Big Idea!
      </h2>
      <form onSubmit={handleSubmit} className="p-4 w-full space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="contactEmail"
          placeholder="Email"
          value={form.contactEmail}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <div className="space-y-2">
          <label className="font-semibold">Team Members</label>
          {form.teamMembers.map((member, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder={`Team Member ${idx + 1}`}
                value={member.name}
                onChange={(e) => handleTeamMemberChange(idx, e.target.value)}
                className="border p-2 w-full"
              />
              <button
                type="button"
                onClick={() => removeTeamMember(idx)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <MdContentCut size={20} />
              </button>
            </div>
          ))}
          <button type="button" onClick={addTeamMember} className="text-blue-500 pl-2">
            + Add Team Member
          </button>
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;