# Sitecore JSS Next.js Sample Application

[Documentation (Experience Platform)](https://doc.sitecore.com/xp/en/developers/hd/21/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

[Documentation (XM Cloud)](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

# Instructions
To run locally:
```
jss start
```

To scaffold a new component
```
jss scaffold <ComponentName>
```

# Setup
Here are some things I did to set this up initially

Install Sitecore JSS CLI
```
npm install -g @sitecore-jss/sitecore-jss-cli    
```

There is a note that `jss create` is no longer supported as of version 20.0.0.  Instead, `npx create-sitecore-jss` should be used.  I did find an issue when running this command in interactive mode, the nextjs-styleguide and REST options were not being selected successfully.  I opted to provide these options via command parameters, which then worked properly.  I wanted to set this up using code-first workflow so that it is not dependent on a running instance of sitecore, so that's why nextjs-styleguide is used.  The instructions say to use REST rather than GraphQL in this configuration, as well.

```
npx create-sitecore-jss --templates nextjs,nextjs-styleguide --fetchWith REST --prerender SSG --prePushHook true 
```
