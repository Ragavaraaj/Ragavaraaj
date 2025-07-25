// Download resume section data
export const downloadResumeContent = {
  title: "Download My Resume",
  subtitle: "Get a PDF version of my resume for your reference.",
  buttons: {
    pdf: {
      text: "Download PDF",
      link: "/ResumeSimple.pdf",
      icon: "download",
    },
    docx: {
      text: "Download DOCX",
      link: "/Resume_update.docx",
      icon: "file-text",
    },
  },
};

export type DownloadResumeContent = typeof downloadResumeContent;

export interface DownloadPageData {
  downloadResumeContent: DownloadResumeContent;
}
