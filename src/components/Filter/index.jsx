import React, {useState, useEffect} from 'react';
import { Styled } from './styles';
import { FiFilter } from 'react-icons/fi';
import { getClothesFilters } from '../../services/filterService';

function Filter({hasFilter}) {
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("0");

  useEffect(()=>{ 
    setFilters(getClothesFilters());
  },[])

  const handleSelectChanges = (filter) => {
    setSelectedFilter(filter.target.value);
  }

  const applyFilter = () => {
    hasFilter(selectedFilter);
  }

  return (
    <Styled.FilterContainer>
        <Styled.FilterTitleContainer>
          <FiFilter/>
          <Styled.FilterTitle>Filtro</Styled.FilterTitle>
        </Styled.FilterTitleContainer>
        <Styled.FilterInfoContainer>
          <Styled.FilterSelectContainer>
            <Styled.FilterSelect name="clothesFilter" onChange={handleSelectChanges}>
              <option disabled value="">Categorias</option>
              <option value="0">Sem filtros</option>
              {
                !!filters && filters.map((element, index)=>(
                  <option key={index} value={element.id}>{element.title}</option>
                ))
              }
            </Styled.FilterSelect>
          </Styled.FilterSelectContainer>
          <Styled.FilterButtonContainer>
            <Styled.FilterButton onClick={applyFilter}>Filtrar</Styled.FilterButton>
          </Styled.FilterButtonContainer>
        </Styled.FilterInfoContainer>
    </Styled.FilterContainer>
  );
}

export default Filter;