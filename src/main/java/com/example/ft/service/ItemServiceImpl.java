package com.example.ft.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ft.dao.ItemDao;
import com.example.ft.entity.Item;
import com.example.ft.entity.ItemOption;
import com.example.ft.entity.ItemTag;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{
	private final ItemDao itemDao;
	
	// 순수 아이템
	@Override
	public Item getItemIId(int iid) {
		return itemDao.getItemIid(iid);
	}

	@Override
	public List<Item> getItemList() {
		return itemDao.getItemList();
	}

	@Override
	public List<Item> getSearchItemList(String query) {
		query = query.replace("'", "''");
		query = "'%" + query + "%'";
		return itemDao.getSearchItemList(query);
	}

	@Override
	public void insertItem(Item item) {
		itemDao.insertItem(item);
	}

	@Override
	public void updateItem(Item item) {
		itemDao.updateItem(item);	
	}

	@Override
	public void deleteItem(int iid) {
		itemDao.deleteItem(iid);
	}

	@Override
	public void saleItem(Item item) {
		itemDao.saleItem(item);
	}

	// itemOption
	@Override
	public List<ItemOption> getItemOptionIId(int iid) {
		return itemDao.getItemOptionIId(iid);
	}
	
	@Override
	public void optionInsert(ItemOption itemOption) {
		itemDao.optionInsert(itemOption);
	}
	
	@Override
	public void optionUpdate(ItemOption itemOption) {
		itemDao.optionUpdate(itemOption);
	}
	
	@Override
	public void optionDeleted(Integer[] ioidsToDelete) {
		
	}
	
	// itemTag
	@Override
	public List<ItemTag> getItemTagIId(int iid) {
		return itemDao.getItemTagIId(iid);
	}
	
	@Override
	public void tagInsert(ItemTag itemTag) {
		itemDao.tagInsert(itemTag);
	}

	@Override
	public void tagUpdate(ItemTag itemTag) {
		itemDao.tagUpdate(itemTag);
	}

	@Override
	public void tagDeleted(Integer[] itidsToDelete) {
		itemDao.tagDeleted(itidsToDelete);
	}

}