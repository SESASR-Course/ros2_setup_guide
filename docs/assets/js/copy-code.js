document.addEventListener("DOMContentLoaded", () => {
  const codeBlocks = document.querySelectorAll("pre");

  const copyWithSelection = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();

    try {
      if (!document.execCommand("copy")) {
        throw new Error("The browser refused to copy the selected command.");
      }
    } finally {
      textarea.remove();
    }
  };

  const copyToClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        console.warn("Clipboard API failed; trying the browser fallback.", error);
      }
    }

    copyWithSelection(text);
  };

  codeBlocks.forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    const highlightContainer = pre.closest(".highlighter-rouge");
    const languageClasses = [
      ...code.classList,
      ...(highlightContainer?.classList || []),
    ];
    const isTerminalCode = languageClasses.some((className) =>
      /^language-(bash|powershell)$/i.test(className)
    );
    if (!isTerminalCode) return;

    const container = highlightContainer || pre.parentElement;
    if (!container) return;
    container.classList.add("copyable-code");

    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy command to clipboard");

    button.addEventListener("click", async () => {
      try {
        await copyToClipboard(code.textContent);
        button.textContent = "Copied!";
        button.setAttribute("aria-label", "Command copied to clipboard");
      } catch (error) {
        button.textContent = "Copy failed";
        button.setAttribute("aria-label", "Copy failed. Select and copy the command manually.");
        console.error("Could not copy command to clipboard:", error);
      }

      window.setTimeout(() => {
        button.textContent = "Copy";
        button.setAttribute("aria-label", "Copy command to clipboard");
      }, 2000);
    });

    container.append(button);
  });
});
