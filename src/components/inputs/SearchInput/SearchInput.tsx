import { memo } from 'react';

import { MdSearch } from 'react-icons/md';
import { useRecoilState } from 'recoil';

import { expandsSearchInputState } from '@/states';

import { Search, SearchInputContainer } from './SearchInput.styles';

const SearchInput = () => {
  const [isExpanded, setIsExpanded] = useRecoilState(expandsSearchInputState);

  const toggleSearchInput = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SearchInputContainer>
      <Search type="text" placeholder="Search..." expanded={isExpanded} />
      <MdSearch onClick={toggleSearchInput} />
    </SearchInputContainer>
  );
};

export default memo(SearchInput);
