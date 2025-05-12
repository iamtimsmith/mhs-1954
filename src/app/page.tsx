const HomePage = () => {
  return (
    <>
      <h1>Newsletter Email Tool</h1>
      <p>
        Welcome to the Newsletter Email tool. You can use this tool to send out
        simple emails to people in your class about upcoming lunches without all
        of the complicated stuff. Below you'll find descriptions of each page as
        well as instructions to use the tool. Happy emailing!
      </p>
      <h2>Privacy</h2>
      <p>
        There isn't a page called privacy, but I wanted to address any questions
        about your information. When you save your information, it is stored in
        your browser (on the device you're using). Clearing your browser's cache
        will delete all of the stuff you've saved. There are no databases or
        other locations being used to store anything, so you don't have to worry
        about your information being used without your knowledge.
        <br />
        <br />
        When you send an email, the application will ask for your password. This
        is required to send an email, though it isn't stored anywhere (not even
        in your browser) to make sure there's no risk of it being found. The
        idea behind this tool is for you to easily email groups of people
        without worrying about managing contacts or risking your privacy to do
        so.
        <br />
        <br />
        Note: At this time, the tool only works with gmail accounts.
      </p>
      <h2>Profile</h2>
      <p>
        The profile page contains information about you (the sender). Here, you
        can set your name and email address. These will show up in the
        recipient's email in the from field.
      </p>
      <h2>Contacts</h2>
      <p>
        On the contacts page, you'll find a list of all the people who will
        receive your email. You can also delete them from here. If you need to
        change a recipient, you'll have to delete them and add them again.
      </p>
      <h2>Add Contact</h2>
      <p>
        You can add a new recipient on the Add Contact page. This will update
        the list found on the Contacts page.
      </p>
      <h2>Email</h2>
      <p>
        The email page is where you set the subject and content of the email and
        send it from. Since your name/email are on the email being sent, you can
        expect any responses to the email in your inbox!
      </p>
    </>
  );
};

export default HomePage;
