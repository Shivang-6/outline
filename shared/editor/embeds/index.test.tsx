import { EmbedDescriptor } from "./index";

describe("EmbedDescriptor", () => {
  it("matches a configured self-hosted diagrams.net URL", () => {
    const diagrams = new EmbedDescriptor({
      id: "diagrams",
      title: "Diagrams.net",
    });
    diagrams.settings = { url: "https://drawio.example.com/" };

    expect(
      diagrams.matcher("https://drawio.example.com/?lightbox=1#Rexample")
    ).toBeTruthy();
  });

  it("continues to match the default diagrams.net viewer", () => {
    const diagrams = new EmbedDescriptor({
      id: "diagrams",
      title: "Diagrams.net",
      regexMatch: [
        /^https:\/\/viewer\.diagrams\.net\/(?!proxy).*(title=\w+)?/,
      ],
    });

    expect(
      diagrams.matcher("https://viewer.diagrams.net/?lightbox=1#Rexample")
    ).toBeTruthy();
  });
});
