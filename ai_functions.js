// user asks a questioj
{
    messages: [
        { role: "system", "You are a legal AI, you are talking to xxx, be polite"},
        { role: "user", "How many days are there in a holiday through the year"}
    ],
    tools: [
        { type: "function", name: "browse_my_files", parameters: { keyword: { type: "String" }}}
    ]
}

// the ai decides to do a function call
// response = 
{
    "type": "function_call",
    "function_id": "xvdfwdfs",
    "function_name": "browse_my_files",
    "parameters": { keyword: "Holidays Sick Leave Maternity"}
}
// Do vector search (Holidays Sick Leave Maternity)
// The result is then added to the list of messages
{
    messages = [
        { role: "system", "You are a legal AI, you are talking to xxx, be polite"},
        { role: "user", "How many days are there in a holiday through the year"},
        { role: "assistatnt","type": "function_call","function_id": "xvdfwdfs","function_name": "browse_my_files","parameters": { keyword: "Holidays Sick Leave Maternity"} },
        { role: "assistant","type": "function_response", function_id: "xvdfwdfs", content: "vector search results" },
    },
    tools: [
        { type: "function", name: "browse_my_files", parameters: { keyword: { type: "String" }}}
    ]
}

// At this point the AI responss to the user, and the message looks like this
{ role: "assistant", "content": "You have 30 days of allowence"}


