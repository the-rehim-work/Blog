export default function handler(req,res){
  const clientId = process.env.CLIENT_ID;
  const redirectUri = encodeURIComponent("https://your-frontend.github.io/Blog/callback.html");
  const scopes = "user-read-playback-state user-read-currently-playing";
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
  res.redirect(authUrl);
}
