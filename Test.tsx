import React, {useState} from 'react';
import {ReadiumView} from 'react-native-readium';
import type {File} from 'react-native-readium';

const MyComponent: React.FC = () => {
  const [file] = useState<File>({
    url: './epubs/9782012666320 (1).epub',
  });

  return <ReadiumView file={file} />;
};

export default MyComponent;
