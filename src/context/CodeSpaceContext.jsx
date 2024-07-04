import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const CodeSpaceContext = createContext();

export const languageMap = {
    "cpp": {
        id: 54,
        defaultCode: 
        "#include <iostream>\n"
        + "using namespace std;\n\n"
        + "int main() {\n"
        + '\tcout << "Hello World!";\n'
        + "\treturn 0;\n"
        + "}",
    },
    "java": {
        id: 62,
        defaultCode: `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
    }`,
    },
    "python": {
        id: 71,
        defaultCode: `print("Hello World!")`,
    },
    "javascript": {
        id: 63,
        defaultCode: `console.log("Hello World!");`,
    }
}

const CodeSpaceProvider = ({ children }) => {

    const initialItems = {
        [uuid()]: {
            title: "DSA",
            CodeSpaces: {
                [uuid()]: {
                    title: "Stack Implementation",
                    language: "cpp",
                    code: languageMap["cpp"].defaultCode,
                },
                [uuid()]: {
                    name: "Array",
                    language: "javascript",
                    code: languageMap["javascript"].defaultCode,
                },
            }
        },
    }

    const [folders, setFolders] = useState(() => {
        let localData = localStorage.getItem('codespaces-data');
        if (localData === null || localData === undefined) {
            return initialItems;
        }

        return JSON.parse(localData);
    })

    useEffect(() => {
        localStorage.setItem('codespaces-data', JSON.stringify(folders));
    }, [folders])

    const deleteCard = (folderId, cardId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId].codespaces[cardId];
            return newState;
        });
    }

    const deleteFolder = (folderId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId];
            return newState;
        });
    }

    const addFolder = (folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[uuid()] = {
                title: folderName,
                codespaces: {}
            }

            return newState;
        })
    }

    const addCodeSpace = (folderId, codespaceName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[folderId].CodeSpaces[uuid()] = {
                title: codespaceName,
                language: language,
                code: languageMap[language].defaultCode,
            }

            return newState;
        })
    }

    const addCodeSpaceAndFolder = (folderName, codespaceName, cardLanguage) => {
        setFolders((oldState) => {
            const newState = { ...oldState }

            newState[uuid()] = {
                title: folderName,
                CodeSpaces: {
                    [uuid()]: {
                        title: codespaceName,
                        language: cardLanguage,
                        code: languageMap[cardLanguage].defaultCode,
                    }
                }
            }

            return newState;
        })
    }

    const editFolderTitle = (folderId, folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].title = folderName;
            return newState;
        })
    }

    const editCodeSpaceTitle = (folderId, cardId, codespaceTitle) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].codespaces[cardId].title = codespaceTitle;
            return newState;
        })
    }

    const saveCodeSpace = (folderId, cardId, newCode, newLanguage) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            newState[folderId].codespaces[cardId].code = newCode;
            newState[folderId].codespaces[cardId].language = newLanguage;
            return newState;
        })
    }

    const CodeSpaceFeatures = {
        folders: folders,
        deleteCard: deleteCard,
        deleteFolder: deleteFolder,
        addFolder: addFolder,
        addCodeSpace: addCodeSpace,
        addCodeSpaceAndFolder: addCodeSpaceAndFolder,
        editFolderTitle: editFolderTitle,
        editCodeSpaceTitle: editCodeSpaceTitle,
        saveCodeSpace: saveCodeSpace,
    }

    return (
        <CodeSpaceContext.Provider value={CodeSpaceFeatures}>
            {children}
        </CodeSpaceContext.Provider>
    )
}

export default CodeSpaceProvider;