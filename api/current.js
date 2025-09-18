import fetch from "node-fetch";

// Store access token somewhere safe (for demo just env or global)
let access_token = process.env.ACCESS_TOKEN;

export default async function handler(req,res){
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing",{
    headers:{ Authorization:`Bearer ${access_token}` }
  });
  if(response.status===204){ res.json({}); return; }
  const data = await response.json();
  res.json(data);
}
