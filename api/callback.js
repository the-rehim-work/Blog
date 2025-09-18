import fetch from "node-fetch";

export default async function handler(req,res){
  const code = req.query.code;
  const redirectUri = "https://your-frontend.github.io/Blog/callback.html";
  const params = new URLSearchParams();
  params.append("grant_type","authorization_code");
  params.append("code",code);
  params.append("redirect_uri",redirectUri);

  const auth = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64");

  const tokenResp = await fetch("https://accounts.spotify.com/api/token",{
    method:"POST",
    headers:{ Authorization:`Basic ${auth}`, "Content-Type":"application/x-www-form-urlencoded" },
    body: params.toString()
  });

  const data = await tokenResp.json();
  // Save tokens in memory or session (for demo we just redirect back with token in hash)
  res.redirect(`https://your-frontend.github.io/Blog/#access_token=${data.access_token}`);
}
