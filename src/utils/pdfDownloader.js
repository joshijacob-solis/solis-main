export const downloadFile = (file,name) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = name; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };