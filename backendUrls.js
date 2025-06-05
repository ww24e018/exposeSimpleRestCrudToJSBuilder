/*
  An example for a backendUrls.js file.
  You should put yours one dir-level up, perhaps?
  Assuming you want go git-clone this or a forked repo
  into your project repo, for example. So the file is
  outside of this repo-clone.

  Other ideas for integration welcome.
  The idea is to be small and easy to grok though.
  Ideally one should not have to study
  man exposeSimpleRestCrudToJSBuilder-config
  to get it to work. Ah well.
 */

const backendBaseURL = "http://localhost:8080"

export const backendUrls = {
    boxes: backendBaseURL+"/boxes",
    comments: backendBaseURL+"/boxcomments",
    users: backendBaseURL+"/users",
}