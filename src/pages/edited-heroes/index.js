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
  const [editedHeroes, setEditedHeroes] = useState(null);
  const [sortHeroes, setSortHeroes] = useState(null);

  const getHeroes = async () => {
    const response = await getData();
    setEditedHeroes(response);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  useEffect(() => {
    if (editedHeroes) setSortHeroes(duplicatedRemove(editedHeroes));
  }, [setEditedHeroes]);

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
