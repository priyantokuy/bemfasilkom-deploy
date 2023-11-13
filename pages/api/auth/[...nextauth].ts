import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code&hd=upnjatim.ac.id",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const googleIsTheProvider = account.provider === "google";
      const emailIsVerified = profile.verified_email === true;
      const isEmailUPN = profile.email?.endsWith("upnjatim.ac.id");

      if (googleIsTheProvider && emailIsVerified && isEmailUPN) {
        return true;
      }

      return false;
    },
    redirect(url, baseUrl) {
    
    const customBaseUrl = process.env.NEXTAUTH_URL;
      
      if (url.startsWith(`${baseUrl}/`)) {
        return url;
      } else if (url.startsWith("/")) {
        return new URL(url, customBaseUrl).toString();
      }
      
      // Handle the case where `url` is not a valid URL
      return Promise.reject(new Error("Invalid URL"));
    },
  },
});
