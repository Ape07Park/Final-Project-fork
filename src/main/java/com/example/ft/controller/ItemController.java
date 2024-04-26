package com.example.ft.controller;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONArray;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.ft.entity.Item;
import com.example.ft.entity.ItemOption;
import com.example.ft.entity.ItemRequest;
import com.example.ft.entity.ItemTag;
import com.example.ft.service.ItemService;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@Slf4j // log로 값을 출력
@RestController
@RequestMapping("/item")	
@RequiredArgsConstructor
public class ItemController {
	private final ItemService itemService;
	
	@GetMapping("/list")
	public JSONArray list() {
		List<Item> list = itemService.getItemList();
		JSONArray jArr = new JSONArray();
		for(Item item : list) {
			JSONObject jObj = new JSONObject(); 
			jObj.put("iid", item.getIid());
			jObj.put("name", item.getName());
			jObj.put("category", item.getCategory());
			jObj.put("img1", item.getImg1());
			jObj.put("img2", item.getImg2());
			jObj.put("content", item.getContent());
			jObj.put("price", item.getPrice());
			jObj.put("salePrice", item.getSalePrice());
			jObj.put("saleDate", item.getSaleDate());
			jObj.put("regDate", item.getRegDate());
			jObj.put("isDeleted", item.getIsDeleted());
			jObj.put("totalSta", item.getTotalSta());
			jArr.add(jObj);
		}
		return jArr;
	}
	
	@GetMapping("/search")
	public JSONArray getSearchItemList(String query) {
		List<Item> list = itemService.getSearchItemList(query);
		JSONArray jArr = new JSONArray();
		for(Item item : list) {
			JSONObject jObj = new JSONObject(); 
			jObj.put("iid", item.getIid());
			jObj.put("name", item.getName());
			jObj.put("category", item.getCategory());
			jObj.put("img1", item.getImg1());
			jObj.put("img2", item.getImg2());
			jObj.put("content", item.getContent());
			jObj.put("price", item.getPrice());
			jObj.put("salePrice", item.getSalePrice());
			jObj.put("saleDate", item.getSaleDate());
			jObj.put("regDate", item.getRegDate());
			jObj.put("isDeleted", item.getIsDeleted());
			jObj.put("totalSta", item.getTotalSta());
			jArr.add(jObj);
		}
		return jArr;
	}
	
	@GetMapping("/detail/{iid}")
	public JSONObject getItemDetail(@PathVariable int iid) {
		Item item = itemService.getItemIId(iid);
		JSONObject jItem = new JSONObject();
		jItem.put("iid", item.getIid());
		jItem.put("name", item.getName());
		jItem.put("category", item.getCategory());
		jItem.put("img1", item.getImg1());
		jItem.put("img2", item.getImg2());
		jItem.put("content", item.getContent());
		jItem.put("price", item.getPrice());
		jItem.put("salePrice", item.getSalePrice());
		jItem.put("saleDate", item.getSaleDate());
		jItem.put("regDate", item.getRegDate());
		jItem.put("isDeleted", item.getIsDeleted());
		jItem.put("totalSta", item.getTotalSta());
		
		List<ItemOption> itemOptionlist = itemService.getItemOptionIId(iid);
		JSONArray jArrOption = new JSONArray();
		for(ItemOption option : itemOptionlist) {
			JSONObject jObj = new JSONObject(); 
			jObj.put("ioid", option.getIoid());
			jObj.put("iid", option.getIid());
			jObj.put("option", option.getOption());
			jObj.put("count", option.getCount());
			jObj.put("isDeleted", option.getIsDeleted());
			jArrOption.add(jObj);
		}
		
		List<ItemTag> itemTaglist = itemService.getItemTagIId(iid);
		JSONArray jArrTag = new JSONArray();
		for(ItemTag tag : itemTaglist) {
			JSONObject jObj = new JSONObject(); 
			jObj.put("itid", tag.getItid());
			jObj.put("iid", tag.getIid());
			jObj.put("tag", tag.getTag());
			jObj.put("isDeleted", tag.getIsDeleted());
			jArrTag.add(jObj);
		}
		
		JSONObject response = new JSONObject();
	    response.put("item", jItem);
	    response.put("options", jArrOption);
	    response.put("tags", jArrTag);
	    
		return response;
	}
	
	@PostMapping("/insert")
	public String ItemInsert(@RequestBody ItemRequest itemRequest) {
	    Item item = Item.builder()
	            .name(itemRequest.getName()).category(itemRequest.getCategory())
	            .img1(itemRequest.getImg1()).img2(itemRequest.getImg2())
	            .img3(itemRequest.getImg3()).content(itemRequest.getContent())
	            .price(itemRequest.getPrice())
	            .build();
	    itemService.insertItem(item);
	    String[] option = itemRequest.getOption();
	    int[] count = itemRequest.getCount();
	    String[] tag = itemRequest.getTag();
	    for (int i = 0; i < option.length; i++) {
	    	if (!option[i].trim().isEmpty() && !(count[i] == 0)) {
	        ItemOption itemOption = ItemOption.builder()
	                .iid(item.getIid()).option(option[i]).count(count[i])
	                .build();
	        itemService.optionInsert(itemOption);
	        }
	    }
	    for (int i = 0; i < tag.length; i++) {
	    	if(tag[i] != null && !tag[i].trim().isEmpty()) {
	        ItemTag itemTag = ItemTag.builder()
	                .iid(item.getIid()).tag(tag[i])
	                .build();
	        itemService.tagInsert(itemTag);
	    	}
	    }

	    return "Success";
	}

	@PostMapping("/update")
	public String ItemUpdate(@RequestBody ItemRequest itemRequest) {
		String img1 = (itemRequest.getImg1() == null || itemRequest.getImg1().equals(""))? itemService.getItemIId(itemRequest.getIid()).getImg1():itemRequest.getImg1();
		String img2 = (itemRequest.getImg2() == null || itemRequest.getImg2().equals(""))? itemService.getItemIId(itemRequest.getIid()).getImg2():itemRequest.getImg2();
		String img3 = (itemRequest.getImg3() == null || itemRequest.getImg3().equals(""))? itemService.getItemIId(itemRequest.getIid()).getImg3():itemRequest.getImg3();
	    // 상품 정보 업데이트
	    Item item = Item.builder()
	            .name(itemRequest.getName())
	            .category(itemRequest.getCategory())
	            .img1(img1)
	            .img2(img2)
	            .img3(img3)
	            .content(itemRequest.getContent())
	            .price(itemRequest.getPrice())
	            .iid(itemRequest.getIid())
	            .build();
	    itemService.updateItem(item);

	    // DB에 있는 ioid 및 itid를 가져옵니다.
	    int[] ioid = itemService.getItemOptionIoid(itemRequest.getIid());
	    int[] itid = itemService.getItemTagItid(itemRequest.getIid());

	    // 요청된 ioid 및 itid를 가져옵니다.
	    Integer[] requestedIoids = itemRequest.getIoid();
	    Integer[] requestedItids = itemRequest.getItid();
	    // 누락된 ioid에 대한 삭제 작업을 수행합니다.
	    if (requestedIoids != null) {
	        for (int i = 0; i < ioid.length; i++) {
	            boolean found = false;
	            for (int j = 0; j < requestedIoids.length; j++) {
	                if (ioid[i] == requestedIoids[j]) {
	                    found = true;
	                    break;
	                }
	            }
	            if (!found) {
	                // ioid[i]를 삭제하는 작업을 수행합니다.
	                itemService.optionDeleted(ioid[i]);
	            }
	        }
	    }

	    // 누락된 itid에 대한 삭제 작업을 수행합니다.
	    if (requestedItids != null) {
	        for (int i = 0; i < itid.length; i++) {
	            boolean found = false;
	            for (int j = 0; j < requestedItids.length; j++) {
	                if (itid[i] == requestedItids[j]) {
	                    found = true;
	                    break;
	                }
	            }
	            if (!found) {
	                // itid[i]를 삭제하는 작업을 수행합니다.
	                itemService.tagDeleted(itid[i]);
	            }
	        }
	    }

	    // 옵션 및 갯수 업데이트 또는 추가
	    String[] options = itemRequest.getOption();
	    int[] counts = itemRequest.getCount();
	    Integer[] ioids = itemRequest.getIoid();
	    if (options != null && counts != null) {
	        for (int i = 0; i < options.length; i++) {
	            if (i < counts.length && counts[i] > 0) { // 유효한 옵션과 갯수일 경우에만 처리
	                if (ioids != null && i < ioids.length && ioids[i] != null && ioids[i] != 0) { // 기존 옵션 업데이트
	                    ItemOption itemOption = ItemOption.builder()
	                            .option(options[i])
	                            .count(counts[i])
	                            .ioid(ioids[i])
	                            .build();
	                    itemService.optionUpdate(itemOption);
	                } else { // 새로운 옵션 추가
	                    ItemOption itemOption = ItemOption.builder()
	                            .iid(itemRequest.getIid())
	                            .option(options[i])
	                            .count(counts[i])
	                            .build();
	                    itemService.optionInsert(itemOption);
	                }
	            }
	        }
	    }

	    // 태그 업데이트 또는 추가
	    String[] tags = itemRequest.getTag();
	    Integer[] itids = itemRequest.getItid();

	    // itids 배열의 길이가 tags 배열의 길이보다 작으면, itids 배열의 길이를 tags 배열의 길이로 확장하고 0으로 채웁니다.
	    if (itids != null && itids.length < tags.length) {
	        Integer[] newItids = Arrays.copyOf(itids, tags.length);
	        Arrays.fill(newItids, itids.length, tags.length, 0);
	        itids = newItids;
	    }

	    if (tags != null) {
	        for (int i = 0; i < tags.length; i++) {
	            // 기존 태그 업데이트
	            if (i < itids.length && itids[i] != null && itids[i] != 0) {
	                ItemTag itemTag = ItemTag.builder()
	                        .tag(tags[i])
	                        .itid(itids[i])
	                        .build();
	                itemService.tagUpdate(itemTag);
	            } else { // 새로운 태그 추가
	                ItemTag itemTag = ItemTag.builder()
	                        .iid(itemRequest.getIid())
	                        .tag(tags[i])
	                        .build();
	                itemService.tagInsert(itemTag);
	            }
	        }
	    }

	    return null;
	}
	
	@PostMapping("/delete")
	public String ItemDelete(int iid) {
		itemService.deleteItem(iid);
		return null;
	}
	
	@PostMapping("/sale")
	public String saleItem(int salePrice, LocalDateTime saleDate, int iid) {
		Item item = Item.builder()
						.salePrice(salePrice).saleDate(saleDate).iid(iid).build();
		itemService.saleItem(item);
		return null;
	}
	
	
}