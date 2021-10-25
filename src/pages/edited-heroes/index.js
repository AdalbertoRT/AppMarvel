import React, {useEffect, useLayoutEffect, useState} from 'react';
import Footer from '../../components/footer';
import RenderItem from '../../components/renderItem';
import {getData} from '../../utils/asyncStorage';
import {
  EditedHeroesList,
  HeroesList,
  HeroesEmpty,
  PageEditedHeroes,
} from './styles';
import {duplicatedRemove} from '../../utils/duplicatedRemove';

const EditedHeroes = () => {
  const [editedHeroes, setEditedHeroes] = useState([]);
  const [sortHeroes, setSortHeroes] = useState([]);

  const getHeroes = async () => {
    const response = await getData();
    setEditedHeroes(response);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  useEffect(() => {
    setSortHeroes(duplicatedRemove(editedHeroes));
  }, [editedHeroes]);

  const renderItem = ({item}) => {
    return <RenderItem item={item} height={100} />;
  };

  return (
    <PageEditedHeroes>
      {sortHeroes ? (
        <HeroesList>
          <EditedHeroesList
            data={sortHeroes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={sortHeroes}
          />
        </HeroesList>
      ) : (
        <HeroesEmpty>You don't have saved heroes!</HeroesEmpty>
      )}
      <Footer iconsVisibles={false} />
    </PageEditedHeroes>
  );
};

export default EditedHeroes;
