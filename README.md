# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l).

### The challenge

Users should be able to:

-   View the optimal layout for each page depending on their device's screen size

    ![image](https://user-images.githubusercontent.com/50521708/190878231-c2bfcf09-d912-430d-969a-0c4472765d9e.png)
    ![image](https://user-images.githubusercontent.com/50521708/190877535-e1772933-d595-401e-8f98-a9c451921e09.png)
    ![image](https://user-images.githubusercontent.com/50521708/190877437-e2ebda61-877d-460f-9dff-50ee6b08b0a5.png)

-   See hover states for all interactive elements throughout the site
-   Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position

    ![image](https://user-images.githubusercontent.com/50521708/190877705-93c5a523-884c-4a8e-aebe-c2f4d0cfe5cc.png)

-   Be able to click a job from the index page so that they can read more information and apply for the job

    ![image](https://user-images.githubusercontent.com/50521708/190877576-a977b73e-68e7-4560-921b-7104627f7d2e.png)
    ![image](https://user-images.githubusercontent.com/50521708/190877617-ed043531-d0f7-4ffa-99ff-9c900b7dc396.png)

-   **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

```
    useEffect(() => {
        const themeLocalStorage = window.localStorage.getItem('theme');
        if (themeLocalStorage !== null) {
            setDarkmode(themeLocalStorage === 'dark');
        } else {
            setDarkmode(
                window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }

        const modeMe = (e) => {
            const dark = !!e.matches;
            setDarkmode(dark);
            window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        };
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', modeMe);
        return window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', modeMe);
    }, []);
```

### Links

-   [Live Site URL](https://frontmentor-devjobs.vercel.app/)
-   [Solution URL](https://github.com/martinsantaclara/devjobs-web-app.git)

## My process

### Built with

-   Semantic HTML5 markup
-   Flexbox
-   Mobile-first workflow
-   [Next.js](https://nextjs.org/) - React framework
-   [Styled Components](https://styled-components.com/) - For styles and themes
-   [Mongoose](https://mongoosejs.com/) - ODM
-   [MongoDb](https://www.mongodb.com/) - Database

## Author

-   Frontend Mentor - [@martinsantaclara](https://www.frontendmentor.io/profile/martinsantaclara)
